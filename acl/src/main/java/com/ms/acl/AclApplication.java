package com.ms.acl;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class AclApplication implements WebMvcConfigurer {
	
	public static void main(String[] args) {
		SpringApplication.run(AclApplication.class, args);
	}

}
