package com.app.services;

import com.app.models.Rating;
import com.app.repositories.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RatingService {

    @Autowired
    private RatingRepository ratingRepository;

    public Rating submitRating(Rating rating) {
        // Perform validation and business logic
        return ratingRepository.save(rating);
    }

    public List<Rating> getRatingsByDelivery(Long deliveryId) {
        return ratingRepository.findByDeliveryId(deliveryId);
    }
}
