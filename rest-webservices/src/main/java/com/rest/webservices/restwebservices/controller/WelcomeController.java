package com.rest.webservices.restwebservices.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/welcome")
public class WelcomeController {
	
	@GetMapping("")
	public String welcome(@RequestParam String name) {
		return "Hello "+name;
	}
}
