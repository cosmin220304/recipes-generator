import React from "react";
import { Recipe } from "@/types/recipe";
import Badge from "../ui/Badge";

interface Props {
  recipe: Recipe;
}

function RecipeCard({ recipe }: Props) {
  const {
    label,
    image,
    cuisineType,
    mealType,
    totalWeight,
    calories,
  } = recipe;

  return (
    <div className="recipe p-4 w-5/6 flex flex-col justify-center align-center items-center">
      <div className="text-lg">{label} </div>
      <img
        src={image}
        className="mb-2 ring-2 ring-stone-700	"
      />
      <div className="flex items-center	m-2 mb-0">
        <Badge color="green">{cuisineType.join(" ")}</Badge>
        <Badge color="blue">{mealType.join(" ")}</Badge>
        <Badge color="yellow">
          {Math.round((totalWeight / calories) * 100)} kcal
        </Badge>
      </div>
    </div>
  );
}

export default RecipeCard;
