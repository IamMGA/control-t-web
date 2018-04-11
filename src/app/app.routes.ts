import { SignupComponent } from './components/misc/signup/signup.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/misc/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent }
];
