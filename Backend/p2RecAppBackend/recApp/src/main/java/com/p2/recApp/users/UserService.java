package com.p2.recApp.users;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
/*************************************Works Cited*********************************************
 * Title: "Java Tutorial - Complete User Login and Registration Backend + Email Verification"
 * Author: Nelson (amigoscode)
 * Date: 1/17/21 (Accessed 12/29/21)
 * Code Version: Java 15
 * Availability: https://youtu.be/QwQuro7ekvc
 * 
 * Title: "Spring Boot Tutorial | Spring Boot Full Stack with React.js | Full Course | 2021"
 * Author: Nelson (amigoscode)
 * Date: 3/28/20 (Accessed 12/29/21)
 * Code Version: Java 15
 * Availability: https://youtu.be/i-hoSg8iRG0
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

	public void uploadUserProfileImage(Integer userID, MultipartFile file) {
		
		//1. if image is not empty
		//2. if file is an image
		//3.if user exists in db
		//4. get metadata from file if any exists
		//5. store image in s3 and update db (profile_pic) with s3 image link
	


	}


}
