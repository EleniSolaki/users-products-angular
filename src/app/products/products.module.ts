import { NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInsertComponent } from './product-insert/product-insert.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { ReactiveFormsModule } from '@angular/forms';
import { tap } from 'rxjs';
import { AppService } from '../app.service';


const userGuard = () => {
  const router = inject(Router);
  const service = inject(AppService);
  return service.isLoggedIn$.pipe(
    tap((isLoggedIn) => {
      if (!isLoggedIn) router.navigate(['/login']);
    })
  );
};

const routes: Routes =[
  {path: 'list', component: ProductListComponent},
  {path: 'insert', component: ProductInsertComponent}
]


@NgModule({
  declarations: [
    ProductInsertComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[ProductService]
})
export class ProductsModule { }
