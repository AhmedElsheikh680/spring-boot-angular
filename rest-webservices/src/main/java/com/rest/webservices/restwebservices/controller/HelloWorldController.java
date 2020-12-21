package com.rest.webservices.restwebservices.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rest.webservices.restwebservices.model.HelloWorld;

@RestController
@RequestMapping("/api/v1") 
@CrossOrigin(origins = "http://localhost:4200")
public class HelloWorldController {

	@GetMapping("/hello-world")
	public HelloWorld helloWorld(String message) {
	return new HelloWorld("Hello-World From Server Side");
		//throw new RuntimeException("Some Error Has Happened! Contact Support At ***-***");
	}
	@GetMapping("/hello-world/{name}")
	public HelloWorld helloWorldPathVariable(@PathVariable String name) {
		return new HelloWorld(String.format("Hello World, %S", name));
	}
}
