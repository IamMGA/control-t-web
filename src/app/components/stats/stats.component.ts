import { IntakesService } from './../../shared/services/intakes.service';
import { Intakes } from './../../shared/model/intakes.model';
import { User } from './../../shared/model/user.model';
import { SessionService } from './../../shared/services/session.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  user: User;
  intakes: Array<Intakes> = [];

  constructor(
    private sessionService: SessionService,
    private intakesService: IntakesService
  ) { }

  ngOnInit() {
    this.user = this.sessionService.getUser();
    console.log(this.user)
    this.intakesService.intakeList()
      .subscribe((intakes) => this.intakes = intakes);
  }

  dale(){
    console.log(this.intakes);
  }
}
