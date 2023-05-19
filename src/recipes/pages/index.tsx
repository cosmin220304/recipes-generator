import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchRecipe } from "@/services/recipe";
import RecipeCard from "@/components/recipe-card/RecipeCard";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import CheckBox from "@/components/ui/CheckBox";
import "../app/globals.css";

const mealTypeOptions = [
  "Breakfast",
  "Dinner",
  "Lunch",
  "Snack",
  "Teatime",
];

function Recipes() {
  const [search, setSearch] = useState("");
  const [isVegetarian, setIsVegetarian] = useState(true);
  const [mealType, setMealType] = useState(
    mealTypeOptions[0]
  );

  const { data, refetch, isLoading } = useQuery(
    ["recipes"],
    {
      suspense: false,
      enabled: false,
      queryFn: () =>
        fetchRecipe(search, mealType, isVegetarian),
    }
  );

  return (
    <div className="flex flex-col gap-4 justify-center align-center items-center">
      <div className="mt-2 text-2xl">Recipe</div>
      <span className="flex flex-col gap-2 w-3/4">
        <Dropdown
          value={mealType}
          options={mealTypeOptions}
          onChange={(mealType) => setMealType(mealType)}
        />
        <Input
          value={search}
          placeholder="write stuff"
          onChange={(e) => setSearch(e.target.value)}
        />
        <CheckBox
          value={isVegetarian}
          toggle={() => setIsVegetarian((prev) => !prev)}
        >
          Is Vegetarian
        </CheckBox>
        <Button onClick={() => refetch()}>Search</Button>
      </span>

      {isLoading && <div>loading...</div>}

      {data?.hits?.map(({ recipe }, index) => (
        <RecipeCard recipe={recipe} key={index} />
      ))}
    </div>
  );
}

export default Recipes;
