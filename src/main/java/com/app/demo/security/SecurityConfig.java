package com.app.demo.security;

import com.app.demo.security.jwt.JwtAuthenticationFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    private final UserDetailsService deliveryPersonnelService;
    private final UserDetailsService vendorService;

    public SecurityConfig(JwtAuthenticationFilter jwtAuthenticationFilter, 
                          UserDetailsService deliveryPersonnelService, 
                          UserDetailsService vendorService) {
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
        this.deliveryPersonnelService = deliveryPersonnelService;
        this.vendorService = vendorService;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/delivery/login", "/api/auth/vendor/login", "/api/deliveryperson/register", "/api/vendors/register").permitAll()
                .anyRequest().authenticated()
            )
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager() {
        DaoAuthenticationProvider deliveryProvider = new DaoAuthenticationProvider();
        deliveryProvider.setUserDetailsService(deliveryPersonnelService);
        deliveryProvider.setPasswordEncoder(passwordEncoder());

        DaoAuthenticationProvider vendorProvider = new DaoAuthenticationProvider();
        vendorProvider.setUserDetailsService(vendorService);
        vendorProvider.setPasswordEncoder(passwordEncoder());

        return new ProviderManager(deliveryProvider, vendorProvider);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
