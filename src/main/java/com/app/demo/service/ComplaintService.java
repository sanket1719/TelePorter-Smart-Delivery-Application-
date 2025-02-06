package com.app.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.app.demo.model.Complaint;
import com.app.demo.model.DeliveryPersonnel;
import com.app.demo.model.Vendor;
import com.app.demo.repository.ComplaintRepository;
import com.app.demo.repository.DeliveryPersonnelRepository;
import com.app.demo.repository.VendorRepository;

import java.util.List;

@Service
public class ComplaintService {
    @Autowired
    private ComplaintRepository complaintRepository;

    @Autowired
    private VendorRepository vendorRepository;

    @Autowired
    private DeliveryPersonnelRepository deliveryPersonnelRepository;

    public Complaint fileComplaint(Long deliveryPersonId, Long vendorId, String message) {
        DeliveryPersonnel deliveryPerson = deliveryPersonnelRepository.findById(deliveryPersonId)
                .orElseThrow(() -> new RuntimeException("Delivery Person not found"));
        Vendor vendor = vendorRepository.findById(vendorId)
                .orElseThrow(() -> new RuntimeException("Vendor not found"));

        Complaint complaint = new Complaint();
        complaint.setDeliveryPersonnel(deliveryPerson);
        complaint.setVendor(vendor);
        complaint.setMessage(message);

        return complaintRepository.save(complaint);
    }

    public List<Complaint> getComplaintsForVendor(Long vendorId) {
        return complaintRepository.findByVendorId(vendorId);
    }
}
