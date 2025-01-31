package com.app.controller;

import com.app.models.Rating;
import com.app.services.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ratings")
public class RatingController {

    @Autowired
    private RatingService ratingService;

    @PostMapping("/submit")
    public ResponseEntity<Rating> submitRating(@RequestBody Rating rating) {
        Rating newRating = ratingService.submitRating(rating);
        return ResponseEntity.ok(newRating);
    }

    @GetMapping("/delivery/{deliveryId}")
    public ResponseEntity<List<Rating>> getRatingsByDelivery(@PathVariable Long deliveryId) {
        return ResponseEntity.ok(ratingService.getRatingsByDelivery(deliveryId));
    }
}
