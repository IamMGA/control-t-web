import { Subscription, Observable } from 'rxjs/Rx';
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
  intakes: Array<any> = [];


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
    console.log(this.intakes);
    this.intakesService.addIntake({ meal: selectedMeal.id }).subscribe(
      (meal) => {
        this.intakes.push(meal);
        this.router.navigate(['/intakes']);
      },
      (error) => {
        this.apiError = error.message;
      }
    );
  }

  removeIntake(i) {
    this.intakesService.removeIntakes(this.intakes[i].id).subscribe(
      (meal) => {
        this.intakes.splice(i, 1);
        this.router.navigate(['/intakes']);
      },
      (error) => {
        this.apiError = error.message;
      }
    );
  }
}
