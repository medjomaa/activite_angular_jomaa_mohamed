import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModule } from './models/product/product.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrlProduct:string="http://localhost:3001/products"
  constructor(private http:HttpClient) { }
  addProduct(p:ProductModule):Observable<ProductModule>{
    return this.http.post<ProductModule>(this.apiUrlProduct,p)
  }
  getProductsByIdCategory(idC:number):Observable<ProductModule>{
    return this.http.get<ProductModule>(this.apiUrlProduct+'/?categoryId='+idC);
  }

}
