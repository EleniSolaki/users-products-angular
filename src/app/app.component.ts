import { Component } from '@angular/core';
import { usersMenu, productsMenu } from 'shared';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Products Frontend';
  usersMenu = usersMenu;
  productsMenu = productsMenu;

  isLoggedIn$ = this.service.isLoggedIn$;
  loggedInFullname$ = this.service.loggedInUserFullname$
  constructor( private service: AppService){}

  onlogout(){
    this.service.logout()
  }

}
