import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes, Router} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';

import { UserService } from './user.service';
import { AppService } from '../app.service';

import { UsersListComponent } from './users-list/users-list.component';
import { UsersInsertComponent } from './users-insert/users-insert.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { tap } from 'rxjs';

const userGuard = () => {
  const router = inject(Router);
  const service = inject(AppService);
  return service.isLoggedIn$.pipe(
    //   tap((isLoggedIn) => {
    //   return !isLoggedIn ? router.navigate(['/login']):true;
    // })
    tap((isLoggedIn) => {
      if (!isLoggedIn) router.navigate(['/login']);
    })
  );
};


const routes: Routes = [
  {path: 'list', component: UsersListComponent, canActivate: [userGuard]},
  {path: 'insert', component: UsersInsertComponent, canActivate: [userGuard]},
  {path: '', component: WelcomeComponent, canActivate: [userGuard]}
]

@NgModule({
  declarations: [
    UsersListComponent,
    UsersInsertComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ UserService]
})
export class UsersModule { }
