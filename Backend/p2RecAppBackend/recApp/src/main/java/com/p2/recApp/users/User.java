package com.p2.recApp.users;

import java.util.Collection;
import java.util.Collections;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/*************************************Works Cited*********************************************
 * Title: "Java Tutorial - Complete User Login and Registration Backend + Email Verification"
 * Author: Nelson (amigoscode)
 * Date: 1/17/21 (Accessed 12/29/21)
 * Code Version: Java 15
 * Availability: https://youtu.be/QwQuro7ekvc
 *********************************************************************************************/
//this is lombok, it generates getters and setters with annotations

@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@ToString

@Entity
public class User implements UserDetails{
	
//	this sets a PK on the ID, sets up a sequence and says it
//	increases by 1 and gives it to the generated value
	@Id
	@SequenceGenerator(
			name="user_sequence",
			sequenceName = "user_sequence",
			allocationSize = 1
			)
	@GeneratedValue(
			strategy = GenerationType.SEQUENCE, 
			generator= "user_sequence"
			)
	
	//come back with @Columns
	private Long userID;
	private String firstname;
	private String lastname;
	private String email;
	private String username;
	private String password;
	private String profile_pic;
	private String fav_rec;
	
	//this has to do with security and login in the tutorial JAVA complete backend 
	private Boolean locked;
	private Boolean enabled;
	@Enumerated(EnumType.STRING)
	private UserRole userRole;
	
	//constructor with everything but ID
	public User(String firstname, 
				String lastname,
				String email,
				String username,
				String password,
				String profile_pic,
				String fav_rec,
				Boolean locked,
				Boolean enabled,
				UserRole userRole) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.username = username;
		this.password = password;
		this.profile_pic = profile_pic;
		this.fav_rec = fav_rec;
		this.locked = locked;
		this.enabled = enabled;
		this.userRole = userRole;
	}

	//this is just a basic role, could implement more in the future
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		SimpleGrantedAuthority authority = new SimpleGrantedAuthority(userRole.name());
		return Collections.singletonList(authority);
	}

	@Override
	public String getPassword() {
		
		return password;
	}

	@Override
	public String getUsername() {
		
		return username;
	}
	
	//this is just if the user could delete their account
	@Override
	public boolean isAccountNonExpired() {
		
		return true;
	}

	
	@Override
	public boolean isAccountNonLocked() {
		
		return !locked;
	}

	//another check for the account
	@Override
	public boolean isCredentialsNonExpired() {
		
		return true;
	}

	@Override
	public boolean isEnabled() {
		
		return enabled;
	}

}
