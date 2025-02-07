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
//    private Long deliveryPersonId;
    
    @ManyToOne
    @JoinColumn(name = "vendorId", nullable = false)
    private Vendor vendor;

    @ManyToOne
    @JoinColumn(name = "deliveryPersonId", nullable = false)
    private DeliveryPersonnel deliveryPersonnel;
}
