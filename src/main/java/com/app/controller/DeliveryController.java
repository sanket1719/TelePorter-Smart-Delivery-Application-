package com.app.controller;

import com.app.models.Delivery;
import com.app.models.User;
import com.app.services.DeliveryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/deliveries")
public class DeliveryController {

    @Autowired
    private DeliveryService deliveryService;

    @PostMapping("/create")
    public ResponseEntity<Delivery> createDelivery(@RequestBody Delivery delivery) {
        Delivery newDelivery = deliveryService.createDelivery(delivery);
        return ResponseEntity.ok(newDelivery);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Delivery> getDeliveryById(@PathVariable Long id) {
        Optional<Delivery> delivery = deliveryService.getDeliveryById(id);
        return delivery.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/vendor/{vendorId}")
    public ResponseEntity<List<Delivery>> getDeliveriesByVendor(@PathVariable Long vendorId) {
        return ResponseEntity.ok(deliveryService.getDeliveriesByVendor(vendorId));
    }

    @GetMapping("/delivery-person/{deliveryPersonId}")
    public ResponseEntity<List<Delivery>> getDeliveriesByDeliveryPerson(@PathVariable Long deliveryPersonId) {
        return ResponseEntity.ok(deliveryService.getDeliveriesByDeliveryPerson(deliveryPersonId));
    }

    @PostMapping("/{id}/assign")
    public ResponseEntity<Delivery> assignDeliveryPerson(@PathVariable Long id, @RequestBody User deliveryPerson) {
        Delivery updatedDelivery = deliveryService.assignDeliveryPerson(id, deliveryPerson);
        return ResponseEntity.ok(updatedDelivery);
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<Delivery> updateDeliveryStatus(@PathVariable Long id, @RequestParam Delivery.DeliveryStatus status) {
        Delivery updatedDelivery = deliveryService.updateDeliveryStatus(id, status);
        return ResponseEntity.ok(updatedDelivery);
    }
}
