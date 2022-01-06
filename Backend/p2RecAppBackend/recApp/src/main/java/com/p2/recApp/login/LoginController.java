package com.p2.recApp.login;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.amazonaws.services.cognitoidp.model.UserNotFoundException;
import com.p2.recApp.users.*;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
@RestController
//@RequestMapping("/api/v1/login")
//@RequestMapping("/api")
@CrossOrigin("*")
public class LoginController {
	//@Autowired
//	private PostRepository postRepository;
	@Autowired
	public UserRepository userRepository;
	
	//public UserService userService;
	
	User user;
	
	@GetMapping("/users")
	public List<User> login() {
		return this.userRepository.findAll();
	}

	
	//public User user;
	//9090/users/1/test
	@PostMapping("/users/login/{username}/{password}")
	public String login1(@PathVariable String username, @PathVariable String password) {
		Optional<User> uname = userRepository.findByUsername(username);
		//Optional<User> upassword = userRepository.findByPassword(password);
		
		User user = uname.get();
		
		System.out.println(" username ***********: "+ user);
		
		if(user.getPassword().equals(password)) {
			return "ok";
		}else {
			return "no";		
		}
		
	}

	//public User user;
	//9090/users?id=1&username=test
	@GetMapping("/users/req")
	public Optional<User> login2(@RequestParam int id, @RequestParam String username) {
		return this.userRepository.findByUserID(id);
	}
	
	
	@PostMapping("/users/login")
	//@MessageMapping("/users/login")
    public String getUserLogin(@RequestBody User user) {
		System.out.println("User:____________" + user);
		System.out.println(" username ***********: "+ user.getUsername());
		//System.out.println("User:____________" + user);
        Optional<User> userData = userRepository.findByUsername(user.getUsername());
        User _user = userData.get();
        //System.out.println(" username ***********: "+ user.getUsername());
        
        return "ok";
	}
	
////	//@PostMapping("/login/{username}/{password}")
//	@PostMapping("/login")
//	public String login3(@RequestBody User user) {
//		//User user2 = new User("test", "test1");
//		//System.out.println("Printing the user object: " + user.getUsername());
//		System.out.println(user.toString());
//		//System.out.println("Printing the user object :(2)" + user2);
		
		
//		Optional<User> uname = userRepository.findByUsername(username);
//		Optional<User> upassword = userRepository.findByPassword(password);
		
		//System.out.println("username:" + uname + " password: " + upassword);
		
	//	return "success";
		

//		
//		if((user.getPassword().equals(up)) && (user.getUsername().equals(un))) {
//		return "ok";
//		}else {
//			return "no";
//		}
	//}
	
	
//	@PostMapping("/jpa/users/{username}/{username}/posts")
//	public ResponseEntity<Object> createPost(@PathVariable String username, @PathVariable String password,  @RequestBody Post post) {
//		
//		Optional<User> uname = userRepository.findByUsername(username);
//		Optional<User> upassword = userRepository.findByPassword(password);
//		
//		if(!uname.isPresent()) {
//			throw new UserNotFoundException("id-" + id);
//		}
//
//		User user = uname.get();
//		
//		//post.setUser(user);
//		
//		postRepository.save(post);
//		
////		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(post.getId())
////				.toUri();
//
//		return ResponseEntity.created(location).build();
//
//	}
	

}
