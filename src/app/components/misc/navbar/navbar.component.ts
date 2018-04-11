import { Observable, Subscription } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { SessionService } from './../../../shared/services/session.service';
import { User } from './../../../shared/model/user.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: User;
  userSubscription: Subscription;

  constructor(
    private router: Router,
    private sessionService: SessionService) { }

  ngOnInit() {
    this.user = this.sessionService.getUser();
    this.userSubscription = this.sessionService.onUserChanges()
      .subscribe(user => this.user = user);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  onClickLogout() {
    this.sessionService.logout()
      .subscribe(() => {
        this.router.navigate(['/login']);
      });
  }
}
