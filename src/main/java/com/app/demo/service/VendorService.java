package com.app.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import com.app.demo.model.Vendor;
import com.app.demo.repository.VendorRepository;

@Service
public class VendorService {
	
	@Autowired
	private VendorRepository vendorRepository;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	public Vendor registerVendor(Vendor vendor) {
	    vendor.setPassword(passwordEncoder.encode(vendor.getPassword())); 
	    return vendorRepository.save(vendor);
	}

	public Vendor loginVendor(String email, String password) {
        Optional<Vendor> vendorOptional = vendorRepository.findByEmail(email);
        if (vendorOptional.isPresent()) {
            Vendor vendor = vendorOptional.get();
            if (passwordEncoder.matches(password, vendor.getPassword())) {
                return vendor; 
            }
        }
        return null; 
    }

}
