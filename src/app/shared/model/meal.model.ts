import { MealSpecNutritions } from './meal-spec-nutritions.model';

export class Meal {
  name: String;
  specNutritions: MealSpecNutritions = new MealSpecNutritions();
}
