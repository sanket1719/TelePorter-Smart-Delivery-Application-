package com.app.demo.service;

import com.app.demo.model.Rating;
import com.app.demo.model.DeliveryPersonnel;
import com.app.demo.model.Vendor;
import com.app.demo.repository.RatingRepository;
import com.app.demo.repository.DeliveryPersonnelRepository;
import com.app.demo.repository.VendorRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class RatingService {
    
    @Autowired
    private RatingRepository ratingRepository;
    
    @Autowired
    private VendorRepository vendorRepository;

    @Autowired
    private DeliveryPersonnelRepository deliveryPersonnelRepository;

    public Rating submitRating(Long vendorId, Long deliveryPersonId, int ratingValue, String reviewText) {
        Optional<Vendor> vendorOpt = vendorRepository.findById(vendorId);
        Optional<DeliveryPersonnel> deliveryOpt = deliveryPersonnelRepository.findById(deliveryPersonId);

        if (vendorOpt.isPresent() && deliveryOpt.isPresent()) {
            Rating rating = new Rating();
            rating.setVendor(vendorOpt.get());
            rating.setDeliveryPersonnel(deliveryOpt.get());
            rating.setRating(ratingValue);
            rating.setReview(reviewText);
            
            return ratingRepository.save(rating);
        } else {
            throw new RuntimeException("Vendor or Delivery Personnel not found.");
        }
    }

    public List<Rating> getRatingsByDeliveryPerson(Long deliveryPersonId) {
        Optional<DeliveryPersonnel> deliveryOpt = deliveryPersonnelRepository.findById(deliveryPersonId);
        if (deliveryOpt.isPresent()) {
            return ratingRepository.findByDeliveryPersonnel(deliveryOpt.get());
        } else {
            throw new RuntimeException("Delivery Personnel not found.");
        }
    }

    public List<Rating> getRatingsByVendor(Long vendorId) {
        Optional<Vendor> vendorOpt = vendorRepository.findById(vendorId);
        if (vendorOpt.isPresent()) {
            return ratingRepository.findByVendor(vendorOpt.get());
        } else {
            throw new RuntimeException("Vendor not found.");
        }
    }
}
