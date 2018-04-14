import { OthersSpecNutritions } from './others-spec-nutritions.model';

export class MealSpecNutritions {
  servingSize: number;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
  others:  OthersSpecNutritions = new OthersSpecNutritions();
}
