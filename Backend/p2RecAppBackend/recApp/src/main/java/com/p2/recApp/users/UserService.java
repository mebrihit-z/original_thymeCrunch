package com.p2.recApp.users;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
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
@AllArgsConstructor

public class UserService implements UserDetailsService {
	
	private final UserRepository userRepository = null;
	private final static String USER_NOT_FOUND_MSG = 
			"user with email %s not found";
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		return userRepository.findByEmail(email)
				.orElseThrow(
						() -> new UsernameNotFoundException(
								String.format(USER_NOT_FOUND_MSG, email)
								));
	}

}
