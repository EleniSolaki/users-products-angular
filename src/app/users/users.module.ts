import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersInsertComponent } from './users-insert/users-insert.component';


const routes: Routes = [
  {path: 'list', component: UsersListComponent},
  {path: 'insert', component: UsersInsertComponent}
]

@NgModule({
  declarations: [
    UsersListComponent,
    UsersInsertComponent
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
