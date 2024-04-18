package com.OgenBertrand.usermodel;

import jakarta.persistence.*;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import lombok.*;

@SpringBootApplication
@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Users {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String username;
	private String email;
	private String password;

	public static void main(String[] args) {
		SpringApplication.run(Users.class, args);
	}
}