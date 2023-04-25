import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//libraries
import { SharedModule } from 'shared';
import { UiModule } from 'ui';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes =[
  {
    path: 'users', loadChildren:()=> import('./users/users.module').then((m)=> m.UsersModule)
  },
  {
    path: 'products', loadChildren:()=> import('./products/products.module').then((m)=> m.ProductsModule)
  },
    {
    path: '', loadChildren:()=> import('./public/public.module').then((m)=> m.PublicModule)
  },
 // { path: '', component:WelcomeComponent },
  { path: '**', component:PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SharedModule,
    UiModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
