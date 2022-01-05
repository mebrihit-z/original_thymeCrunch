//package com.p2.recApp.ingredients;
//
//import javax.persistence.Access;
//import javax.persistence.AccessType;
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.SequenceGenerator;
//import javax.persistence.Table;
//
//import javax.persistence.Id;
//
//import lombok.AllArgsConstructor;
//import lombok.EqualsAndHashCode;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//import lombok.ToString;
///*************************************Works Cited*********************************************
// * Title: "Java Tutorial - Complete User Login and Registration Backend + Email Verification"
// * Author: Nelson (amigoscode)
// * Date: 1/17/21 (Accessed 12/29/21)
// * Code Version: Java 15
// * Availability: https://youtu.be/QwQuro7ekvc
// *********************************************************************************************/
////
//////@Getter
//////@Setter
//////@EqualsAndHashCode
//////@AllArgsConstructor
//////@NoArgsConstructor
//////@ToString
//
//
//@Entity
//@Table(name="ingredients")
//@Access(value= AccessType.FIELD)
//public class Ingredient  {
//
//	
////	@SequenceGenerator(
////			name="ing_sequence",
////			sequenceName = "ing_sequence",
////			allocationSize = 1
////			)
////	@GeneratedValue(
////			strategy = GenerationType.SEQUENCE, 
////			generator= "ing_sequence"
////			)
//	
//	@Id
//	@Column(name="ingID")
//	private Integer ingID;
//	
//	@Column(name= "ing_name")
//	private String ingName;
//	
//	@Column(name= "rec")
//	private String recipe;
//	
//	@Column(name= "ing_type")
//	private String ingType;
//	
//	@Column(name= "meal_type")
//	private String mealType;
//	
//	
//
//}
