import { ListRecipes } from "@/types/recipe";
import axios from "axios";

const fetchRecipe = async (
  ingredients: string,
  mealType: string,
  isVegetarian: boolean
): Promise<ListRecipes> => {
  const { data } = await axios.post("/api/recipe", {
    ingredients,
    mealType,
    isVegetarian,
  });

  return data;
};

export { fetchRecipe };
