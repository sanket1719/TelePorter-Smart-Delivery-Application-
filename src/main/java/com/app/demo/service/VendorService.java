package com.app.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.demo.model.Vendor;
import com.app.demo.repository.VendorRepository;

@Service
public class VendorService {
	
	@Autowired
	private VendorRepository vendorRepository;
	
	public Vendor registerVendor(Vendor vendor) {	
		return vendorRepository.save(vendor);
	}
}
