import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { moveIn } from '../router.animations';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
  animations: [moveIn()],
  host:{'[@moveIn]': ''}
})
export class StatsComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
