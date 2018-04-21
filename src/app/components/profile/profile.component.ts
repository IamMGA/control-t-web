import { SessionService } from './../../shared/services/session.service';
import { User } from './../../shared/model/user.model';
import { UsersService } from './../../shared/services/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  apiError: string;
 

  constructor(
    private sessionService: SessionService,
    private usersService: UsersService,
    private router : Router
  ){ }
  
  ngOnInit() {
    this.user = this.sessionService.getUser();
  }
  
  onSubmitProfile(editProfile){
    this.usersService.editProfile(this.user).subscribe(
      (profile)=>{
        this.router.navigate(['/login']);
      },
      (error)=>{
        this.apiError = error.message;
      }
    )
  }

}
