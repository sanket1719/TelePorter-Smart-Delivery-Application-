package com.app.demo.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.demo.model.DeliveryPersonnel;
import com.app.demo.service.DeliveryPersonnelService;

@RestController
@RequestMapping("/api/deliveryperson")
public class DeliveryPersonnelController {

	@Autowired
	private DeliveryPersonnelService deliveryPersonnelService;
	
	@PostMapping("/register")
	public ResponseEntity<DeliveryPersonnel> registerDeliveryPersonnel(@RequestBody DeliveryPersonnel deliveryPersonnel)
	{
		DeliveryPersonnel deliveryPersonnelRegisterd = deliveryPersonnelService.registerDeliveryPersonnel(deliveryPersonnel);
		return ResponseEntity.ok(deliveryPersonnel);
	}
	
}
