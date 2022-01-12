package com.p2.recApp.recipes;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.p2.recApp.ingredients.IngredientService;
import com.p2.recApp.recipes.Recipe;
import com.p2.recApp.recipes.RecipeRepository;

@RestController
@RequestMapping("/api/v1/recipes/users")
@CrossOrigin("*")
public class RecipeController {
//	@Autowired
//	private final EntityManager manager = null;
	@Autowired
	private RecipeRepository recipeRepository;
	@Autowired
	private Recipe recipe;
	private String recName;

//	@Autowired
//	public RecipeController(RecipeRepository recipeRepository, Recipe recipe, EntityManager manager) {
//		this.recipeRepository = recipeRepository;
//		this.recipe = recipe;
//		this.manager = manager;
//	}
	

//	@PostMapping("/add")
//	public String addRecipe(
//
//			@RequestBody Recipe recipe) {
//
//		System.out.println("pending"+ recipe);
//		recipe.setStatus("pending");
//		System.out.println("pending"+ recipe);
//		recipeRepository.save(recipe);
//
//		 return "I did it";
//	}

	@GetMapping("/all-recipes")
	public List<Recipe> allRecipes(){
		return recipeRepository.findAll();
	}

//	@GetMapping("/{recipe}")
//	public Optional<Recipe> getRecipe(){
//		return recipeRepo.findByRecName(recName);
//	}
	
	@GetMapping("/pending")
	public List<Recipe> getPendingRec(){
		System.out.println(recipeRepository.findByStatus("pending"));
		return recipeRepository.findByStatus("pending");
	}
	
	@GetMapping("/approved")
	public List<Recipe> getApprovedRec(){
		System.out.println(recipeRepository.findByStatus("approved"));
		return recipeRepository.findByStatus("approved");
	}
	
	@PostMapping("/approve-deny/{recID}/{status}")
	public String approveRec(
			@PathVariable("recID") Integer recID, @PathVariable("status") String status){
		
		Optional<Recipe>  newRecipe = recipeRepository.findByRecID(recID);
		System.out.println("newRecipe ********" + newRecipe);
		Recipe recipe = newRecipe.get();
		
//		recipeRepository.deleteById(recID);
		if(status.equals("approve") || status.equals("Approve")){
			recipe.setStatus("approved");
			recipeRepository.save(recipe);
		}else if(status.equals("deny")|| status.equals("Deny")){
			recipe.setStatus("denied");
			recipeRepository.save(recipe);
		}else {
				return "no";}
		return "ok";
				
	}
	


	

}
