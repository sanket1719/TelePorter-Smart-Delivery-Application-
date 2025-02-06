package com.app.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.demo.model.Complaint;

public interface ComplaintRepository extends JpaRepository<Complaint, Long> {

	List<Complaint> findByVendorId(Long vendorId);
	
}
