import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

const routes: Routes =[
  {
    path: 'users', loadChildren:()=> import('./users/users.module').then((m)=> m.UsersModule)
  },
  {
    path: 'products', loadChildren:()=> import('./products/products.module').then((m)=> m.ProductsModule)
  },
  { path: '', component:WelcomeComponent },
  { path: '**', component:PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
