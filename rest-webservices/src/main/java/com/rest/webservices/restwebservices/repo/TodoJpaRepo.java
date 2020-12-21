package com.rest.webservices.restwebservices.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rest.webservices.restwebservices.model.Todo;

@Repository
public interface TodoJpaRepo extends JpaRepository<Todo, Long> {

	public List<Todo> findByUsername(String username);
}
