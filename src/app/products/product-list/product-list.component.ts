import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product, ProductAPIList } from '../products.interfaces';
import{ Subscription } from 'rxjs'


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService){}

  loading = false;
  productList : Product[] = []
  subscription: Subscription | undefined

  ngOnInit(): void {
    console.log('Starting "findAll" API call')
    this.loading = true;
    this.subscription = this.productService.findAll().subscribe({
      next:(apiData: ProductAPIList)=>{
        const {status, data} = apiData;
        this.productList = data;
        console.log(status, data);},
      error:(err)=>{this.loading = false;console.log(err);},
      complete:()=>{this.loading = false; console.log("API call completed")}
    })
  }

}
