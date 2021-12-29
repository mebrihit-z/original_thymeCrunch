package com.p2.recApp.ingredients;

public class IngredeintsPOJO {
	public int ingID;
	public String ing_name;
	public String rec;
	public String ing_type;
	public String meal_type;
	public int getIngID() {
		return ingID;
	}
	public void setIngID(int ingID) {
		this.ingID = ingID;
	}
	public String getIng_name() {
		return ing_name;
	}
	public void setIng_name(String ing_name) {
		this.ing_name = ing_name;
	}
	public String getRec() {
		return rec;
	}
	public void setRec(String rec) {
		this.rec = rec;
	}
	public String getIng_type() {
		return ing_type;
	}
	public void setIng_type(String ing_type) {
		this.ing_type = ing_type;
	}
	public String getMeal_type() {
		return meal_type;
	}
	public void setMeal_type(String meal_type) {
		this.meal_type = meal_type;
	}
	public IngredeintsPOJO(int ingID, String ing_name, String rec, String ing_type, String meal_type) {
		super();
		this.ingID = ingID;
		this.ing_name = ing_name;
		this.rec = rec;
		this.ing_type = ing_type;
		this.meal_type = meal_type;
	}
	public IngredeintsPOJO() {
		super();
	}
	@Override
	public String toString() {
		return "IngredeintsPOJO [ingID=" + ingID + ", ing_name=" + ing_name + ", rec=" + rec + ", ing_type=" + ing_type
				+ ", meal_type=" + meal_type + "]";
	}
	

}
