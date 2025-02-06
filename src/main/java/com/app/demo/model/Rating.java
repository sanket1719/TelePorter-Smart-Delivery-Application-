package com.app.demo.model;

import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
@Table(name = "ratings")
public class Rating {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int rating; 
    private String review;
    
    @ManyToOne
    @JoinColumn(name = "vendor_id", nullable = false)
    private Vendor vendor;

    @ManyToOne
    @JoinColumn(name = "delivery_person_id", nullable = false)
    private DeliveryPersonnel deliveryPersonnel;
}
