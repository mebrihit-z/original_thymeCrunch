import { RecipeButton } from "../../../buttons/AddRecipeButton";
import {UserRecipesButton} from "../../../buttons/UserRecipesbutton";
import {PendingRecipesButton} from "../../../buttons/PendingRecipesButton";
import Navbar from "../../../Navbar";

function RecipesMenu() {
    return (
       <>
       <div className='recipDiv'>
           
            <Navbar/>
            <RecipeButton/>
            <UserRecipesButton/>
            <PendingRecipesButton/>
        </div>
       </>
    )
}

export default RecipesMenu;
