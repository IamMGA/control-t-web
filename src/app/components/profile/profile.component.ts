import { User } from './../../shared/model/user.model';
import { SessionService } from './../../shared/services/session.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User
  profile: FormGroup;

  constructor(private sessionService: SessionService) { 
  }
  
  ngOnInit() {
    this.user = this.sessionService.getUser();
    this.profile = new FormGroup({
      'nickname': new FormControl(this.user.nickname, [
                                        Validators.required,
                                        Validators.minLength(3)
                                      ]),
      'info': new FormGroup({
        'sex': new FormControl(this.user.info.sex, Validators.required),
        'weight': new FormControl(this.user.info.weight, Validators.required),
        'stature': new FormControl(this.user.info.stature, Validators.required),
        'age': new FormControl(this.user.info.age, Validators.required),
        'activity': new FormControl(this.user.info.activity, Validators.required)
      })
    })
  }
  
  submitProfile(){
    console.log(this.profile)
    console.log(this.user)
  }

}
