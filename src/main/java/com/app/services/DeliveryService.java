package com.app.services;

import com.app.models.Delivery;
import com.app.models.User;
import com.app.repositories.DeliveryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DeliveryService {

    @Autowired
    private DeliveryRepository deliveryRepository;

    public Delivery createDelivery(Delivery delivery) {
        // Perform validation and business logic
        return deliveryRepository.save(delivery);
    }

    public Optional<Delivery> getDeliveryById(Long id) {
        return deliveryRepository.findById(id);
    }

    public List<Delivery> getDeliveriesByVendor(Long vendorId) {
        return deliveryRepository.findByVendorId(vendorId);
    }

    public List<Delivery> getDeliveriesByDeliveryPerson(Long deliveryPersonId) {
        return deliveryRepository.findByDeliveryPersonId(deliveryPersonId);
    }

    public Delivery assignDeliveryPerson(Long deliveryId, User deliveryPerson) {
        Optional<Delivery> delivery = deliveryRepository.findById(deliveryId);
        if (delivery.isPresent()) {
            Delivery existingDelivery = delivery.get();
            existingDelivery.setDeliveryPerson(deliveryPerson);
            existingDelivery.setStatus(Delivery.DeliveryStatus.IN_PROGRESS);
            return deliveryRepository.save(existingDelivery);
        }
        throw new RuntimeException("Delivery not found");
    }

    public Delivery updateDeliveryStatus(Long deliveryId, Delivery.DeliveryStatus status) {
        Optional<Delivery> delivery = deliveryRepository.findById(deliveryId);
        if (delivery.isPresent()) {
            Delivery existingDelivery = delivery.get();
            existingDelivery.setStatus(status);
            return deliveryRepository.save(existingDelivery);
        }
        throw new RuntimeException("Delivery not found");
    }
}
