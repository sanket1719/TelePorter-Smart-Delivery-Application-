package com.app.demo.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "delivery_requests")
public class DeliveryRequest {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String senderName;
    private String senderPhone;
    private String senderAddress;
    
    private String receiverName;
    private String receiverPhone;
    private String receiverAddress;
    
    private double productWeight;

    private boolean isAccepted;
    
    @ManyToOne
    @JoinColumn(name = "vendor_id", nullable = false)
    private Vendor vendor;

    @ManyToOne
    @JoinColumn(name = "delivery_person_id")
    private DeliveryPersonnel deliveryPersonnel;
}
