package com.ms.acl.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ms.acl.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	@Query(value = "SELECT u FROM User u where flgAtivo is true")
	public List<User> all();
	
	public User findByUsernameAndPassword(String username, String password); 
	
	public Optional<User> findByUsername(String username); 
	
}
