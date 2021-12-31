package com.p2.recApp.users;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
/*************************************Works Cited*********************************************
 * Title: "Java Tutorial - Complete User Login and Registration Backend + Email Verification"
 * Author: Nelson (amigoscode)
 * Date: 1/17/21 (Accessed 12/29/21)
 * Code Version: Java 15
 * Availability: https://youtu.be/QwQuro7ekvc
 *********************************************************************************************/

@Service


public class UserService/* implements UserDetailsService*/ {

	//	private  BCryptPasswordEncoder bCryptPasswordEncoder;
	//	
	//	private final static String USER_NOT_FOUND_MSG = 
	//			"user with email %s not found";
	//	@Override
	//	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
	//		// TODO Auto-generated method stub
	//		return userRepository.findByEmail(email)
	//				.orElseThrow(
	//						() -> new UsernameNotFoundException(
	//								String.format(USER_NOT_FOUND_MSG, email)
	//								));
	//}

private final UserRepository userRepository;
public String signUpUser(User user) {

	boolean userExists = userRepository.findByEmail(user.getEmail()).isPresent();

	if(userExists) {
		throw new IllegalStateException("email taken");
	}

//	String encodedPassword = bCryptPasswordEncoder.encode(user.getPassword());

//	user.setPassword(encodedPassword);

	userRepository.save(user);

	//TODO: send confirmation token 

	return "";
}

@Autowired
public UserService(UserRepository userRepository) {
	this.userRepository = userRepository;
}

List <User> getUserProfiles(){

	return userRepository.findAll();
}


}
