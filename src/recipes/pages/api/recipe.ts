import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { mealType, ingredients, isVegetarian } = req.body;

  const params = new URLSearchParams({
    type: "public",
    app_id: process.env.APP_ID!,
    app_key: process.env.APP_KEY!,
    mealType,
    q: ingredients,
  });

  if (isVegetarian) {
    params.append("health", "vegetarian");
  }

  const { data } = await axios.get(
    "https://api.edamam.com/api/recipes/v2?" + params
  );

  res.status(200).json(data);
};
