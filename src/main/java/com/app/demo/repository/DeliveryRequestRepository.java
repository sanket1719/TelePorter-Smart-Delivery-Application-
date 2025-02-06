package com.app.demo.repository;

import com.app.demo.model.DeliveryRequest;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DeliveryRequestRepository extends JpaRepository<DeliveryRequest, Long> {
	List<DeliveryRequest> findByIsAcceptedFalse();
}
