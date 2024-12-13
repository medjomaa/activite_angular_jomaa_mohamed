import { Component } from '@angular/core';
import { ProductModule } from '../models/product/product.module';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.css'
})
export class FormProductComponent {
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
  
  addProduct(i:number) {
    this.listProducts[i-1].id++;
    this.listProducts.push(this.model);
    console.log("Produit ajouté");
  }
onSubmit(_t5:NgForm){
    if(_t5.valid){
      alert("Formulaire plein");
    }
  }
  
}
