package com.app.demo.controller;

import com.app.demo.model.DeliveryPersonnel;
import com.app.demo.model.Vendor;
import com.app.demo.repository.DeliveryPersonnelRepository;
import com.app.demo.repository.VendorRepository;
import com.app.demo.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private VendorRepository vendorRepository;

    @Autowired
    private DeliveryPersonnelRepository deliveryPersonnelRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/vendor/login")
    public Map<String, String> vendorLogin(@RequestBody Map<String, String> credentials) {
        Optional<Vendor> vendor = vendorRepository.findByEmail(credentials.get("email"));
        if (vendor.isPresent() && passwordEncoder.matches(credentials.get("password"), vendor.get().getPassword())) {
            String token = jwtUtil.generateToken(vendor.get().getEmail());
            return Map.of("token", token);
        }
        throw new RuntimeException("Invalid credentials");
    }

    @PostMapping("/delivery/login")
    public Map<String, String> deliveryLogin(@RequestBody Map<String, String> credentials) {
        Optional<DeliveryPersonnel> person = deliveryPersonnelRepository.findByEmail(credentials.get("email"));
        if (person.isPresent() && passwordEncoder.matches(credentials.get("password"), person.get().getPassword())) {
            String token = jwtUtil.generateToken(person.get().getEmail());
            return Map.of("token", token);
        }
        throw new RuntimeException("Invalid credentials");
    }
}
