import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { IsAuthenticatedGuard } from './shared/guards/is-authenticated.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { StatsComponent } from './components/stats/stats.component';
import { AddIntakesComponent } from './components/intakes/add-intakes/add-intakes.component';
import { MealCreateComponent } from './components/meal/meal-create/meal-create.component';
import { Component } from '@angular/core';
import { SignupComponent } from './components/misc/signup/signup.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/misc/login/login.component';

export const routes: Routes = [
        { path: '',   redirectTo: '/login', pathMatch: 'full' },
        { path: 'login', component: LoginComponent },
        { path: 'signup', component: SignupComponent },
        {
                path: 'meals',
                canActivate: [IsAuthenticatedGuard],
                component: MealCreateComponent
        },
        {
                path: 'intakes',
                canActivate: [IsAuthenticatedGuard],
                component: AddIntakesComponent
        },
        {
                path: 'stats',
                canActivate: [IsAuthenticatedGuard],
                component: StatsComponent
        },
        {
                path: 'profile',
                canActivate: [IsAuthenticatedGuard],
                component: ProfileComponent
        },
        { path: '**', component: PageNotFoundComponent }
];
