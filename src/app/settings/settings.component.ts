import { Component, OnInit } from '@angular/core';
import { AuthService } from './../core/auth.service';
import { moveIn, fallIn } from '../router.animations';
import * as $ from 'jquery';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class SettingsComponent implements OnInit {

  constructor(public auth: AuthService) { }
  submit(){
      $( "#button" ).addClass( "onclic");
      setTimeout(validate, 350);

    function validate() {
      setTimeout(function() {
        $( "#button" ).removeClass( "onclic" );
        $( "#button" ).addClass( "validate");
        setTimeout(callback, 450);
      }, 1250 );
    }
      function callback() {
        setTimeout(function() {
          $( "#button" ).removeClass( "validate" );
        }, 2000 );
      }
  }
  ngOnInit() {  }
    
}
