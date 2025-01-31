package com.app.services;

import com.app.models.Message;
import com.app.repositories.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;

    public Message sendMessage(Message message) {
        // Perform validation and business logic
        return messageRepository.save(message);
    }

    public List<Message> getMessagesByDelivery(Long deliveryId) {
        return messageRepository.findByDeliveryId(deliveryId);
    }
    
}
