package com.app.demo.controller;

import com.app.demo.model.Rating;
import com.app.demo.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ratings")
@CrossOrigin(origins = "http://localhost:5173") // Allow frontend requests
public class RatingController {

    @Autowired
    private RatingService ratingService;

    @PostMapping
//    public ResponseEntity<Rating> submitRating(@RequestBody Rating rating) {
//        Rating savedRating = ratingService.submitRating((rating.getId(),rating.getId(),rating.getRating(),rating.getReview());
//        return ResponseEntity.ok(savedRating);
//    }

    @GetMapping("/delivery/{deliveryPersonId}")
    public ResponseEntity<List<Rating>> getRatingsByDeliveryPerson(@PathVariable Long deliveryPersonId) {
        return ResponseEntity.ok(ratingService.getRatingsForDeliveryPerson(deliveryPersonId));
    }

    @GetMapping("/vendor/{vendorId}")
    public ResponseEntity<List<Rating>> getRatingsByVendor(@PathVariable Long vendorId) {
        return ResponseEntity.ok(ratingService.getRatingsByVendor(vendorId));
    }
}
