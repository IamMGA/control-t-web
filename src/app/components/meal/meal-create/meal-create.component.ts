import { MealService } from './../../../shared/services/meal.service';
import { Router } from '@angular/router';
import { Meal } from './../../../shared/model/meal.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-create',
  templateUrl: './meal-create.component.html',
  styleUrls: ['./meal-create.component.scss']
})
export class MealCreateComponent implements OnInit {
  meal: Meal = new Meal();
  apiError: string;

  constructor(
    private router: Router,
    private mealService: MealService
  ) { }

  ngOnInit() {
  }

  onSubmitMeal(mealCreateForm) {
    this.mealService.create(this.meal).subscribe(
      (meal) => {
        this.meal = new Meal();
        this.router.navigate(['/meals']);
      },
      (error) => {
        this.apiError = error.message;
      }
    );
  }
}
