package com.app.demo.security;

import com.app.demo.model.DeliveryPersonnel;
import com.app.demo.model.Vendor;
import com.app.demo.repository.DeliveryPersonnelRepository;
import com.app.demo.repository.VendorRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final VendorRepository vendorRepository;
    private final DeliveryPersonnelRepository deliveryPersonRepository;

    public CustomUserDetailsService(VendorRepository vendorRepository, DeliveryPersonnelRepository deliveryPersonRepository) {
        this.vendorRepository = vendorRepository;
        this.deliveryPersonRepository = deliveryPersonRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Vendor vendor = vendorRepository.findByEmail(email).orElse(null);
        if (vendor != null) {
            return User.builder()
                    .username(vendor.getEmail())
                    .password(vendor.getPassword())
                    .roles("VENDOR")
                    .build();
        }

        DeliveryPersonnel deliveryPerson = deliveryPersonRepository.findByEmail(email).orElse(null);
        if (deliveryPerson != null) {
            return User.builder()
                    .username(deliveryPerson.getEmail())
                    .password(deliveryPerson.getPassword())
                    .roles("DELIVERY_PERSON")
                    .build();
        }

        throw new UsernameNotFoundException("User not found with email: " + email);
    }
}
