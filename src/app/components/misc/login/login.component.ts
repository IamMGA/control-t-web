import { Component, OnInit } from '@angular/core';
import { SessionService } from './../../../shared/services/session.service';
import { User } from '../../../shared/model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  apiError: string;
  
  constructor(
    private sessionService: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onSubmitLogin(loginForm) {
    this.sessionService.authenticate(this.user).subscribe(
      (user) => {
        loginForm.reset();
        console.log(user);
        this.router.navigate(['/']);
      },
      (error) => {
        this.apiError = error.message;
      }
    );
  }
}
