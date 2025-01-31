package com.app.repositories;

import com.app.models.Delivery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DeliveryRepository extends JpaRepository<Delivery, Long> {
    List<Delivery> findByVendorId(Long vendorId);
    List<Delivery> findByDeliveryPersonId(Long deliveryPersonId);
}
