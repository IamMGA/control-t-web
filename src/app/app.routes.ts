import { StatsComponent } from './components/stats/stats.component';
import { AddIntakesComponent } from './components/intakes/add-intakes/add-intakes.component';
import { MealCreateComponent } from './components/meal/meal-create/meal-create.component';
import { Component } from '@angular/core';
import { SignupComponent } from './components/misc/signup/signup.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/misc/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'meals', component:  MealCreateComponent },
    { path: 'intakes', component: AddIntakesComponent },
    { path: 'stats', component: StatsComponent }
];
