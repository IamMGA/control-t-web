import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: FormGroup;

  constructor() { 
    this.profile = new FormGroup({
      'nickname': new FormControl('', [
                                        Validators.required,
                                        Validators.minLength(3)
                                      ]),
      'info': new FormGroup({
        'sex': new FormControl('', Validators.required),
        'weight': new FormControl('', Validators.required),
        'stature': new FormControl('', Validators.required),
        'age': new FormControl('', Validators.required),
        'activity': new FormControl('', Validators.required)
      })
    })
  }

  ngOnInit() {
  }

  submitProfile(){
    console.log(this.profile)
  }

}
