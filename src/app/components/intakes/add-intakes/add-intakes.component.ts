import { Intakes } from './../../../shared/model/intakes.model';
import { Subscription } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { IntakesService } from './../../../shared/services/intakes.service';
import { MealService } from './../../../shared/services/meal.service';
import { Meal } from './../../../shared/model/meal.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-intakes',
  templateUrl: './add-intakes.component.html',
  styleUrls: ['./add-intakes.component.scss']
})
export class AddIntakesComponent implements OnInit {
  apiError: string;
  meals: Array<Meal> = [];
  intakes: Intakes = new Intakes();
  // intake: string;

  constructor(
    private router: Router,
    private intakesService: IntakesService,
    private mealService: MealService
  ) { }

  ngOnInit() {
    this.mealService.listMeals()
      .subscribe((meals) => this.meals = meals);
  }

  addMeal(selectedMeal) {
    // console.log(selectedMeal);
    // this.intake = Object.values(addMealForm.value).toString();
    // this.intakes.push(this.intake);
    // this.intakes.push(Object.values(addMealForm.value).toString());
    this.intakes.meals.push(selectedMeal.id);
    console.log(selectedMeal)
    // console.log(addMealForm.value);
    // console.log(this.intakes);
    // console.log(this.intakes);
    // console.log(this.intakes);
  }
  removeIntake(i) {
    this.intakes.meals.splice(i, 1);
  }

  submitList() {
    this.intakesService.addIntake({meals: this.intakes.meals}).subscribe(
      (meals) => {
        this.router.navigate(['/intakes']);
      },
      (error) => {
        this.apiError = error.message;
      }
    );
  }
}
