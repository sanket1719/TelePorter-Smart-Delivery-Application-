package com.app.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.models.User;
import com.app.services.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/register")
	public ResponseEntity<User> RegisterUser(@RequestBody User user)
	{
		User newUser = userService.registerUser(user);
		return ResponseEntity.ok(newUser);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<User> getUserById(@PathVariable Long id)
	{
		Optional<User> user = userService.getUserById(id);
		return user.map(ResponseEntity::ok).orElseGet(()->ResponseEntity.notFound().build());
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteUserById(@PathVariable Long id)
	{
		userService.deleteUser(id);
		return ResponseEntity.ok("User is deleted");
	}
}
