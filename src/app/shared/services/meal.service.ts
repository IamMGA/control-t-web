import { Observable } from 'rxjs/Rx';
import { BaseApiService } from './base-api.service';
import { Http } from '@angular/http';
import { Meal } from './../model/meal.model';
import { Injectable } from '@angular/core';

@Injectable()
export class MealService extends BaseApiService {
  private static readonly MEALS_API = `${BaseApiService.BASE_API}/meals`;
  constructor(private http: Http) {
    super();
  }

  create(meal: Meal): Observable<Meal> {
    return this.http.post(MealService.MEALS_API, JSON.stringify(meal), BaseApiService.defaultOptions)
      .map(res => res.json())
      .catch(error => this.handleError(error));
  }

  listMeals(): Observable<Array<Meal>> {
    return this.http.get(MealService.MEALS_API, BaseApiService.defaultOptions)
      .map(res => res.json())
      .catch(error => this.handleError(error));
  }
}
