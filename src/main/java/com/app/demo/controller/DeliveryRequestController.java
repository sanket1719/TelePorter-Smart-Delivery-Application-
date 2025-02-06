package com.app.demo.controller;

import com.app.demo.model.DeliveryPersonnel;
import com.app.demo.model.DeliveryRequest;
import com.app.demo.service.DeliveryPersonnelService;
import com.app.demo.service.DeliveryRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/delivery-requests")
public class DeliveryRequestController {

    @Autowired
    private DeliveryRequestService deliveryRequestService;
    
    private DeliveryPersonnelService deliveryPersonnelService;

    @PostMapping("/create")
    public ResponseEntity<String> createDeliveryRequest(@RequestBody DeliveryRequest deliveryRequest) {
        deliveryRequestService.createDeliveryRequest(deliveryRequest);
        return ResponseEntity.ok("Delivery request created successfully!");
    }

    @GetMapping
    public ResponseEntity<List<DeliveryRequest>> getAllDeliveryRequests() {
        return ResponseEntity.ok(deliveryRequestService.getAllDeliveryRequests());
    }
    
    @PostMapping("/accept/{id}/{deliveryPersonId}")
    public ResponseEntity<?> acceptDelivery(@PathVariable Long id, @PathVariable Long deliveryPersonId) {
        try {
        	DeliveryPersonnel deliveryPersonnel = deliveryPersonnelService.getDeliveryPerson(deliveryPersonId);
            DeliveryRequest acceptedRequest = deliveryRequestService.acceptDelivery(id, deliveryPersonnel);
            if (acceptedRequest != null) {
                return ResponseEntity.ok("Delivery accepted successfully!");
            } else {
                return ResponseEntity.badRequest().body("Delivery request already accepted or not found.");
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }
}
