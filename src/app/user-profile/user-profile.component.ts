import { Component } from '@angular/core';
import { AuthService } from './../core/auth.service';
import { moveIn, fallIn} from '../router.animations';


@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class UserProfileComponent {
  
  constructor(public auth: AuthService) { }
}