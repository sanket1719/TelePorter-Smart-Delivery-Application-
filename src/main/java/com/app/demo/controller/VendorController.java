package com.app.demo.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.demo.model.Vendor;
import com.app.demo.service.VendorService;

@RestController
@RequestMapping("/api/vendors")
public class VendorController {

	@Autowired
	private VendorService vendorService;
	
	@PostMapping("/register")
	public ResponseEntity<Vendor> registerVendor(@RequestBody Vendor vendor)
	{
		Vendor registeredVendor = vendorService.registerVendor(vendor);
		return ResponseEntity.ok(registeredVendor);
	}
	
	@PostMapping("/login")
    public ResponseEntity<?> loginVendor(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");
        String password = credentials.get("password");

        Vendor vendor = vendorService.loginVendor(email, password);
        if (vendor != null) {
            return ResponseEntity.ok(Map.of("message", "Login successful", "vendorId", vendor.getId()));
        } else {
            return ResponseEntity.status(401).body(Map.of("error", "Invalid email or password"));
        }
    }
}
