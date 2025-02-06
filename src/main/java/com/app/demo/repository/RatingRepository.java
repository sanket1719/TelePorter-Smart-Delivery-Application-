package com.app.demo.repository;

import com.app.demo.model.Rating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface RatingRepository extends JpaRepository<Rating, Long> {
    List<Rating> findByDeliveryPersonId(Long deliveryPersonId);
    List<Rating> findByVendorId(Long vendorId);
}
