package com.ms.acl.api.dto;

import java.time.LocalDate;

import javax.validation.constraints.NotBlank;

import com.ms.acl.entity.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

	private Long id;
	
	@NotBlank(message = "Username required")
	private String username;
	
	private String password;
	private LocalDate created_at;
	private LocalDate updated_at;
	private Boolean flg_ativo;
	
	
	public static UserDTO converter(User user) {
		
		return UserDTO.builder()
					.id(user.getId())
					.username(user.getUsername())
					.password(user.getPassword())
					.flg_ativo(user.getFlgAtivo())
					.created_at(user.getCreatedAt())
					.updated_at(user.getUpdatedAt())
					.build();
					
	}
	
}

