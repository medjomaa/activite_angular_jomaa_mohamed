import { Component } from '@angular/core';
import { ProductModule } from '../models/product/product.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-form-product2',
  templateUrl: './form-product2.component.html',
  styleUrl: './form-product2.component.css'
})
export class FormProduct2Component {
  constructor(private _service:ProductService){}
  model:ProductModule={
    id: 0,
    name: '',
    image: '',
    categoryId: 0,
    description: '',
    price: 0,
    brand: '',
    promotion: 0
  }
  listProducts:ProductModule[]=[]
  product_data:FormGroup=new FormGroup({
    name:new FormControl(this.model.name,[Validators.required,Validators.minLength(5),Validators.pattern("[a-zA-Z]*")]),
    image:new FormControl(this.model.image),
    categorie:new FormControl(this.model.categoryId,[Validators.required]),
    description:new FormControl(this.model.description),
    price:new FormControl(this.model.price,[Validators.required,Validators.pattern("^|d+(|.|d+)?$")]),
    brand:new FormControl(this.model.brand),
    promotion:new FormControl(this.model.promotion,[Validators.pattern("^(0|[1-9][0-9]?)$")])
  });
  addProduct(p:ProductModule) {
    this._service.addProduct(p).subscribe();
  }
}
