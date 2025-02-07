package com.app.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.demo.model.DeliveryPersonnel;
import com.app.demo.repository.DeliveryPersonnelRepository;

@Service
public class DeliveryPersonnelService {
	
	@Autowired
	private DeliveryPersonnelRepository deliveryPersonnelRepository;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	 public DeliveryPersonnel getDeliveryPerson(Long id) {
		 return deliveryPersonnelRepository.getById(id);
	 }
	    public DeliveryPersonnel registerDeliveryPersonnel(DeliveryPersonnel deliveryPersonnel) {
	        deliveryPersonnel.setPassword(passwordEncoder.encode(deliveryPersonnel.getPassword()));
	        return deliveryPersonnelRepository.save(deliveryPersonnel);
	    }

	    public DeliveryPersonnel loginDeliveryPersonnel(String email, String password) {
	        Optional<DeliveryPersonnel> personnelOptional = deliveryPersonnelRepository.findByEmail(email);
	        if (personnelOptional.isPresent()) {
	            DeliveryPersonnel personnel = personnelOptional.get();
	            if (passwordEncoder.matches(password, personnel.getPassword())) {
	                return personnel;
	            }
	        }
	        return null;
	    }
}
