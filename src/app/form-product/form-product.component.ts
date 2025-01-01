import { Component } from '@angular/core';
import { ProductModule } from '../models/product/product.module';
import { NgForm } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.css'
})
export class FormProductComponent {
  constructor(private _service:ProductService){}
  listProducts:ProductModule[]=[];
  model: ProductModule = {
    id: 0,
    name: '',
    image: '',
    categoryId: 0,
    description: '',
    price: 0.0,
    brand: '',
    promotion: 0
  };
  
  addProduct(p:ProductModule) {
    this._service.addProduct(p).subscribe();
  }
onSubmit(_t5:NgForm){
    if(_t5.valid){
      alert("Formulaire plein");
    }
  }
  
}
