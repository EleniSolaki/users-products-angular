import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../products.interfaces';

@Component({
  selector: 'app-product-insert',
  templateUrl: './product-insert.component.html',
  styleUrls: ['./product-insert.component.css']
})
export class ProductInsertComponent {

  form : FormGroup;

  constructor(private fb: FormBuilder, private service: ProductService){
    this.form = this.fb.group({
      product: ['', [Validators.required, Validators.maxLength(100)]],
      cost:['', Validators.required],
      description:[''],
      quantity:['', Validators.required]
    })
  }


    onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      const product = this.form.value as Product;
      this.service.insertProduct(product).subscribe((response) => {
        console.log(response);
      });
    } else {
      console.log('Form is not valid');
    }
  }


}
