package com.rest.webservices.restwebservices.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind	.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.rest.webservices.restwebservices.model.Todo;
import com.rest.webservices.restwebservices.repo.TodoJpaRepo;
import com.rest.webservices.restwebservices.service.TodoService;


@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class TodoController {
	
	@Autowired
	private TodoService TodoService;
	@Autowired
	private TodoJpaRepo todoJpaRepo;

//	@GetMapping("/users/{username}/todos")
//	public List<Todo> getAllTodos(@PathVariable String username){
//		return TodoService.finadAll();
//	}
	@GetMapping("/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username){
		return todoJpaRepo.findByUsername(username);
		//return TodoService.finadAll();
	}
	
	
	
//	@GetMapping("/users/{username}/todos/{id}")
//	public Todo getTodo(@PathVariable String username, @PathVariable long id) {
//		return TodoService.findById(id);
//	}
	@GetMapping("/users/{username}/todos/{id}")
	public Todo getTodo(@PathVariable String username, @PathVariable long id) {
		return todoJpaRepo.findById(id).get();
	}
	
	
	
//	@PostMapping("/users/{username}/todos")
//	public ResponseEntity<Void> saveTodo(@RequestBody Todo todo,  @PathVariable String username) {
//		Todo createdTodo =   TodoService.save(todo);
//		//Location
//		//Get CurrentResource url
//		//{id}
//		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
//		return ResponseEntity.created(uri).build();
//		
//	}
	@PostMapping("/users/{username}/todos")
	public ResponseEntity<Void> saveTodo(@RequestBody Todo todo,  @PathVariable String username) {
		todo.setUsername(username);
		Todo createdTodo =   todoJpaRepo.save(todo);
		//Location
		//Get CurrentResource url
		//{id}
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
		return ResponseEntity.created(uri).build();
		
	}
	
//	@PutMapping("/users/{username}/todos/{id}")
//	public ResponseEntity<Todo> updateTodo(@RequestBody Todo todo, @PathVariable String username, @PathVariable long id){
//		Todo todoUpdated = TodoService.save(todo);
//		return new ResponseEntity<Todo>(todo, HttpStatus.OK);
//	}
	@PutMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@RequestBody Todo todo, @PathVariable String username, @PathVariable long id){
		Todo todoUpdated = todoJpaRepo.save(todo);
		return new ResponseEntity<Todo>(todo, HttpStatus.OK);
	}
	
	
//	@DeleteMapping("/users/{username}/todos/{id}")
//	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){
//		Todo todo = TodoService.deleteById(id);
//		if(todo !=null) {
//			return ResponseEntity.noContent().build();  
//		}
//		return ResponseEntity.notFound().build();
//	}
	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){
		todoJpaRepo.deleteById(id);
			return ResponseEntity.noContent().build();  

	}
}
