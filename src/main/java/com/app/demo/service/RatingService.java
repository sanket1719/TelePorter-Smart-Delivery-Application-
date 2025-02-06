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

@Service
public class RatingService {
    
    @Autowired
    private RatingRepository ratingRepository;
    
    @Autowired
    private VendorRepository vendorRepository;

    @Autowired
    private DeliveryPersonnelRepository deliveryPersonnelRepository;

    public Rating submitRating(Long vendorId, Long deliveryPersonId, int stars, String review) {
        Vendor vendor = vendorRepository.findById(vendorId)
                .orElseThrow(() -> new RuntimeException("Vendor not found"));
        DeliveryPersonnel deliveryPersonnel = deliveryPersonnelRepository.findById(deliveryPersonId)
                .orElseThrow(() -> new RuntimeException("Delivery Person not found"));

        Rating rating = new Rating();
        rating.setVendor(vendor);
        rating.setDeliveryPersonnel(deliveryPersonnel);
        rating.setRating(stars);
        rating.setReview(review);

        return ratingRepository.save(rating);
    }

    public List<Rating> getRatingsByVendor(Long vendorId){
    	return ratingRepository.findByVendorId(vendorId);
    }
    public List<Rating> getRatingsForDeliveryPerson(Long deliveryPersonId) {
        return ratingRepository.findByDeliveryPersonId(deliveryPersonId);
    }
}
