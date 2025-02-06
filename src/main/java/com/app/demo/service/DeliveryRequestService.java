package com.app.demo.service;

import com.app.demo.model.DeliveryPersonnel;
import com.app.demo.model.DeliveryRequest;
import com.app.demo.repository.DeliveryRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeliveryRequestService {

    @Autowired
    private DeliveryRequestRepository deliveryRequestRepository;

    public DeliveryRequest createDeliveryRequest(DeliveryRequest deliveryRequest) {
        return deliveryRequestRepository.save(deliveryRequest);
    }

    public List<DeliveryRequest> getAllDeliveryRequests(){
    	return deliveryRequestRepository.findAll();
    }
    public List<DeliveryRequest> getAvailableDeliveries() {
        return deliveryRequestRepository.findByIsAcceptedFalse();
    }

    public DeliveryRequest acceptDelivery(Long requestId, DeliveryPersonnel deliveryPerson) {
        return deliveryRequestRepository.findById(requestId)
                .map(request -> {
                    if (!request.isAccepted()) {
                        request.setDeliveryPersonnel(deliveryPerson);
                        request.setAccepted(true);
                        return deliveryRequestRepository.save(request);
                    }
                    return null;
                }).orElse(null);
    }
}
