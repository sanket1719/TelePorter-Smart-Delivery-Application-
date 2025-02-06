package com.app.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.demo.model.DeliveryPersonnel;
import com.app.demo.repository.DeliveryPersonnelRepository;

@Service
public class DeliveryPersonnelService {
	
	@Autowired
	private DeliveryPersonnelRepository deliveryPersonnelRepository;
	
	public DeliveryPersonnel registerDeliveryPersonnel(DeliveryPersonnel deliveryPersonnel)
	{
		return deliveryPersonnelRepository.save(deliveryPersonnel);
	}
	
	public DeliveryPersonnel getDeliveryPerson(Long id) {
		return deliveryPersonnelRepository.getById(id);
	}
}
