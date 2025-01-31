package com.app.controller;

import com.app.models.Message;
import com.app.services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    @Autowired
    private MessageService messageService;

    @PostMapping("/send")
    public ResponseEntity<Message> sendMessage(@RequestBody Message message) {
        Message newMessage = messageService.sendMessage(message);
        return ResponseEntity.ok(newMessage);
    }

    @GetMapping("/delivery/{deliveryId}")
    public ResponseEntity<List<Message>> getMessagesByDelivery(@PathVariable Long deliveryId) {
        return ResponseEntity.ok(messageService.getMessagesByDelivery(deliveryId));
    }
}
