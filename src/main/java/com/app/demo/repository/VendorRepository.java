package com.app.demo.repository;

import com.app.demo.model.Vendor;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VendorRepository extends JpaRepository<Vendor, Long> {
	Optional<Vendor> findByEmail(String email);
}