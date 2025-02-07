package com.app.demo.controller;

import com.app.demo.model.Rating;
import com.app.demo.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/ratings")
public class RatingController {

    @Autowired
    private RatingService ratingService;

    @PostMapping
    public ResponseEntity<Rating> submitRating(@RequestBody Map<String, Object> payload) {
        Long vendorId = ((Number) payload.get("vendorId")).longValue();
        Long deliveryPersonId = ((Number) payload.get("deliveryPersonnelId")).longValue();
        int ratingValue = (int) payload.get("rating");
        String reviewText = (String) payload.get("review");

        Rating savedRating = ratingService.submitRating(vendorId, deliveryPersonId, ratingValue, reviewText);
        return ResponseEntity.ok(savedRating);
    }

    @GetMapping("/delivery/{deliveryPersonId}")
    public ResponseEntity<List<Rating>> getRatingsByDeliveryPerson(@PathVariable Long deliveryPersonId) {
        return ResponseEntity.ok(ratingService.getRatingsByDeliveryPerson(deliveryPersonId));
    }

    @GetMapping("/vendor/{vendorId}")
    public ResponseEntity<List<Rating>> getRatingsByVendor(@PathVariable Long vendorId) {
        return ResponseEntity.ok(ratingService.getRatingsByVendor(vendorId));
    }
}
