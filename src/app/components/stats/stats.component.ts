import { Router } from '@angular/router';
import { IntakesService } from './../../shared/services/intakes.service';
import { Intakes } from './../../shared/model/intakes.model';
import { User } from './../../shared/model/user.model';
import { SessionService } from './../../shared/services/session.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  apiError: string;
  user: User;
  intakes: Array<Intakes> = [];
  tFat: number = 0;
  tCarbs: number = 0;
  tProteins: number = 0;
  tSugar: number = 0;
  tCholesterol: number = 0;
  tCaffeine: number = 0;
  data: any = {};
  options: any = {};

  constructor(
    private sessionService: SessionService,
    private intakesService: IntakesService,
    private router: Router
  ) {
    // this.data = {
    //   labels: ['A','B','C'],
    //   datasets: [
    //       {
    //           data: [this.tCarbs, this.tFat, this.tProteins],
    //           backgroundColor: [
    //               "#FF6384",
    //               "#36A2EB",
    //               "#FFCE56"
    //           ],
    //           hoverBackgroundColor: [
    //               "#FF6384",
    //               "#36A2EB",
    //               "#FFCE56"
    //           ]
    //       }]    
    //   };
  }

  ngOnInit() {
    this.user = this.sessionService.getUser();
    console.log(this.user)
    // this.intakesService.intakeList()
    //   .subscribe((intakes) => this.intakes = intakes)
    this.intakesService.intakeList()
      .subscribe((intakes) => {
        this.intakes = intakes;
        intakes.forEach((elem) => {
          this.tFat += elem.meal.specNutritions.fat;
          this.tCarbs += elem.meal.specNutritions.carbs;
          this.tProteins += elem.meal.specNutritions.protein;
          this.tSugar += elem.meal.specNutritions.others.sugar;
          this.tCholesterol += elem.meal.specNutritions.others.cholesterol;
          this.tCaffeine += elem.meal.specNutritions.others.caffeine;
        })
        this.updateData();
      })
  }

  dale() {
    console.log(this.intakes);
  }

  removeIntake(i) {
    this.intakesService.removeIntakes(this.intakes[i].id).subscribe(
      (meal) => {
        this.recalculate(i);
        this.intakes.splice(i, 1);
      },
      (error) => {
        this.apiError = error.message;
      }
    );
  }

  recalculate(elem) {
    this.tFat -= this.intakes[elem].meal.specNutritions.fat;
    this.tCarbs -= this.intakes[elem].meal.specNutritions.carbs;
    this.tProteins -= this.intakes[elem].meal.specNutritions.protein;
    this.data.datasets[0].data = [this.tCarbs, this.tFat, this.tProteins];
  }

  updateData() {
    this.data = {
      labels: ['Carbs', 'Fat', 'Proteins'],
      datasets: [
        {
          data: [this.tCarbs, this.tFat, this.tProteins],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };
    this.options = {
      legend: {
        position: 'right'
      }
    };
  }
}
