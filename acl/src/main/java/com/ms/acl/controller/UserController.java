package com.ms.acl.controller;

import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ms.acl.api.dto.UserDTO;
import com.ms.acl.entity.User;
import com.ms.acl.exception.RegraNegocioException;
import com.ms.acl.service.UserService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;

@RestController
@Api(value = "User aaaaaaaa")
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {

	private final UserService service;
	
//	@Secured({ "ROLE_ADMINISTRATOR" })
	@ApiOperation(value = "Mostra lista de usuários")
	@GetMapping
	public ResponseEntity<List<UserDTO>> get() {
		
		List<User> lista = service.all();
		
		List<UserDTO> listaDTO = lista.stream().map( n -> UserDTO.converter(n) ).collect(Collectors.toList());
		
		return ResponseEntity.ok(listaDTO);
		
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@PostMapping 
	public ResponseEntity save(@RequestBody @Valid UserDTO dto) {
		
		User user = User.builder()
				.username(dto.getUsername())
				.password(dto.getPassword())
				.build();
		
		try {
			User userSaved = service.save(user);
			return new ResponseEntity(userSaved, HttpStatus.CREATED);
		}catch (RegraNegocioException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
		
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@PutMapping
	public ResponseEntity update(@RequestBody UserDTO dto) {
		
		User user = User.builder()
				.id(dto.getId())
				.username(dto.getUsername())
				.password(dto.getPassword())
				.build();
		
		try {
			User userSaved = service.update(user);
			return new ResponseEntity(userSaved, HttpStatus.CREATED);
		}catch (RegraNegocioException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
		
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@DeleteMapping("/{id}")
	public ResponseEntity delete(@PathVariable(name = "id") Long id) {
		
		try {
			User userSaved = service.delete(id);
			return new ResponseEntity(userSaved, HttpStatus.OK);
		}catch (RegraNegocioException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
		
		
	}
	

}
