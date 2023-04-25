import { Component } from '@angular/core';
import { usersMenu, productsMenu } from 'shared';
import { AppService } from './app.service';
import { UiService } from 'ui';

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

  alerts = this.uiService.alerts;

  constructor( private service: AppService, private uiService: UiService){}

  onlogout(){
    this.service.logout()
  }

  onAlertDismiss(index: number){
    this.uiService.alertDismiss(index)
  }

}
