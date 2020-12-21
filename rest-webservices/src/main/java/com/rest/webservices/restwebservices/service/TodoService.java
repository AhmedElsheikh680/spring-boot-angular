package com.rest.webservices.restwebservices.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.rest.webservices.restwebservices.model.Todo;

@Service
public class TodoService {
	private static List<Todo>todos = new ArrayList<>();
	private static long idCounter=0;
	static {
		todos.add(new Todo(++idCounter, "Ahmed", "Learn To Dance", new Date(), false));
		todos.add(new Todo(++idCounter, "Ahmed", "Learn About Mocroservices", new Date(), false));
		todos.add(new Todo(++idCounter, "Ahmed", "Learn About Angular", new Date(), false));
	}
	public List<Todo> finadAll(){
		return todos;
	}

	public Todo save(Todo todo) {
		if(todo.getId() == -1 || todo.getId()==0) {
			todo.setId(++idCounter);
			todos.add(todo);
		}else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}
	
	public Todo deleteById(long id) {
		Todo todo = findById(id);
		if(todo ==null)return null;
		 if(todos.remove(todo)) {
			 return todo;
		 }
		 return null;
	}

	public  Todo findById(long id) {
		for(Todo todo: todos) {
			if(todo.getId() == id) {
				return todo; 
			}
		}
		return null;
	}
}
