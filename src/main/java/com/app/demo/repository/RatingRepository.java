package com.app.demo.repository;

import com.app.demo.model.DeliveryPersonnel;
import com.app.demo.model.Rating;
import com.app.demo.model.Vendor;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface RatingRepository extends JpaRepository<Rating, Long> {
	List<Rating> findByDeliveryPersonnel(DeliveryPersonnel deliveryPersonnel);
    List<Rating> findByVendor(Vendor vendor);
}
