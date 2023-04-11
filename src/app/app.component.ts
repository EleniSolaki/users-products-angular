import { Component } from '@angular/core';
import { MenuItem } from './app.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Products Frontend';

usersMenu: MenuItem[]=[
  {text: 'List all Users', link: 'users/list'},
  {text: 'Insert a User', link: 'not-yet-implemented'},
  {text: 'Delete a User', link: 'not-yet-implemented'},
  {text: 'Update a User', link: 'not-yet-implemented'}
]
productsMenu: MenuItem[]=[
  {text: 'List all Products', link: 'not-yet-implemented'},
  {text: 'Insert a Products', link: 'not-yet-implemented'},
  {text: 'Delete a Products', link: 'not-yet-implemented'},
  {text: 'Update a Products', link: 'not-yet-implemented'}
]
}
