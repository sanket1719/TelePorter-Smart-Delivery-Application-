package com.app.models;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "deliveries")
public class Delivery {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "vendor_id", nullable = false)
    private User vendor;

    @ManyToOne
    @JoinColumn(name = "delivery_person_id")
    private User deliveryPerson;

    @Column(nullable = false, length = 255)
    private String pickupLocation;

    @Column(nullable = false, length = 255)
    private String dropoffLocation;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private PackageSize packageSize;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private DeliveryStatus status = DeliveryStatus.PENDING;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    // Enums
    public enum PackageSize {
        SMALL, MEDIUM, LARGE
    }

    public enum DeliveryStatus {
        PENDING, IN_PROGRESS, COMPLETED
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public User getVendor() {
		return vendor;
	}

	public void setVendor(User vendor) {
		this.vendor = vendor;
	}

	public User getDeliveryPerson() {
		return deliveryPerson;
	}

	public void setDeliveryPerson(User deliveryPerson) {
		this.deliveryPerson = deliveryPerson;
	}

	public String getPickupLocation() {
		return pickupLocation;
	}

	public void setPickupLocation(String pickupLocation) {
		this.pickupLocation = pickupLocation;
	}

	public String getDropoffLocation() {
		return dropoffLocation;
	}

	public void setDropoffLocation(String dropoffLocation) {
		this.dropoffLocation = dropoffLocation;
	}

	public PackageSize getPackageSize() {
		return packageSize;
	}

	public void setPackageSize(PackageSize packageSize) {
		this.packageSize = packageSize;
	}

	public DeliveryStatus getStatus() {
		return status;
	}

	public void setStatus(DeliveryStatus status) {
		this.status = status;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

    // Getters and Setters
    
}
