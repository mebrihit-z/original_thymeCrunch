package com.p2.recApp.login;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.p2.recApp.users.*;
@RestController
//@RequestMapping("/api/v1/login")
//@RequestMapping("api/")
@CrossOrigin("*")
public class LoginController {
	@Autowired
	public UserRepository userRepository;
	public UserService userService;
	public User user;
	
//	@PostMapping("/login/{username}/{password}")
//	public String login(@PathVariable("username") String username, @PathVariable("password") String password) {
//		
//		Optional<User> un = userRepository.findByUsername(username);
//		Optional<User> up = userRepository.findByPassword(password);
//		if((user.getPassword().equals(up)) && (user.getUsername().equals(un))) {
//			return "ok";
//		}else {
//			return "no";
//		}
//	}
	
	
	@GetMapping("/users")
	public List<User> login() {
		return this.userRepository.findAll();
	}

}
