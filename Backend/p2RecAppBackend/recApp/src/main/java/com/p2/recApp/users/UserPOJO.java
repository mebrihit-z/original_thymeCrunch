package com.p2.recApp.users;

public class UserPOJO {
	
	
	public UserPOJO() {
		super();
	}
	public UserPOJO(int userID, String firstname, String lastname, String email, String username, String password,
			String profile_pic, String fav_rec) {
		super();
		this.userID = userID;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.username = username;
		this.password = password;
		this.profile_pic = profile_pic;
		this.fav_rec = fav_rec;
	}
	@Override
	public String toString() {
		return "UserPOJO [userID=" + userID + ", firstname=" + firstname + ", lastname=" + lastname + ", email=" + email
				+ ", username=" + username + ", password=" + password + ", profile_pic=" + profile_pic + ", fav_rec="
				+ fav_rec + "]";
	}
	public int getUserID() {
		return userID;
	}
	public void setUserID(int userID) {
		this.userID = userID;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getProfile_pic() {
		return profile_pic;
	}
	public void setProfile_pic(String profile_pic) {
		this.profile_pic = profile_pic;
	}
	public String getFav_rec() {
		return fav_rec;
	}
	public void setFav_rec(String fav_rec) {
		this.fav_rec = fav_rec;
	}
	private int userID;
	private String firstname;
	private String lastname;
	private String email;
	private String username;
	private String password;
	private String profile_pic;
	private String fav_rec;

}
