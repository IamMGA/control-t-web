import { IsAuthenticatedGuard } from './shared/guards/is-authenticated.guard';
import { IntakesService } from './shared/services/intakes.service';
import { MealService } from './shared/services/meal.service';
import { UsersService } from './shared/services/users.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, CanActivate } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/misc/navbar/navbar.component';
import { routes } from './app.routes';
import { LoginComponent } from './components/misc/login/login.component';
import { SessionService } from './shared/services/session.service';
import { HttpModule } from '@angular/http';
import { SignupComponent } from './components/misc/signup/signup.component';
import { MealCreateComponent } from './components/meal/meal-create/meal-create.component';
import { AddIntakesComponent } from './components/intakes/add-intakes/add-intakes.component';
import { DropdownModule } from 'primeng/dropdown';
import { StatsComponent } from './components/stats/stats.component';
import { ChartModule } from 'primeng/chart';
import { PercentPipe } from './pipes/percent.pipe';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    MealCreateComponent,
    AddIntakesComponent,
    StatsComponent,
    PercentPipe,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    DropdownModule,
    ChartModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [
    SessionService,
    UsersService,
    MealService,
    IntakesService,
    IsAuthenticatedGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
