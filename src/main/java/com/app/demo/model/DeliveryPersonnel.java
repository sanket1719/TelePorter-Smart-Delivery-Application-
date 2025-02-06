package com.app.demo.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Data
@Entity
@Table(name="delivery_persons")
public class DeliveryPersonnel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    private String name;
    private String email;
    private String phoneNumber;
    private String password;
    private String digiLockerId;
    
    @OneToMany(mappedBy = "deliveryPersonnel", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Rating> ratings;
    
    @OneToMany(mappedBy = "deliveryPersonnel", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Complaint> complaints;
}
