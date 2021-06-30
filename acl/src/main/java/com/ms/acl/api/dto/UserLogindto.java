package com.ms.acl.api.dto;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
public class UserLogindto {
	
	@NotBlank(message = "Username required")
	private String username;
	
	@NotBlank(message = "Password required")
	private String password;
}
