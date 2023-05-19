export interface Recipe {
  label: string;
  image: string;
  source: string;
  url: string;
  dietLabels: string[];
  ingredients: {
    text: string;
    quantity: number;
    measure: string;
    food: string;
    weight: number;
    foodCategory: string;
    image: string;
  }[];
  calories: number;
  totalWeight: number;
  totalTime: number;
  cuisineType: string[];
  mealType: string[];
  dishType: string[];
}

export interface ListRecipes {
  from: 1;
  to: 20;
  count: 10000;
  _links: {
    next: {
      href: string;
    };
  };
  hits: {
    recipe: Recipe;
  }[];
}
