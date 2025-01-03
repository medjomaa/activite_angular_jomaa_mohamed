import { Component, OnInit } from '@angular/core';
import { ProductModule } from '../models/product/product.module';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-category-qp',
  templateUrl: './products-category-qp.component.html',
  styleUrl: './products-category-qp.component.css'
})
export class ProductsCategoryQPComponent implements OnInit{
  listProducts: ProductModule[] = [
    {"id":1,"name":"Réfrigérateur LG Inox","image":"/assets/images/refrigerateur-lg.jpg","categoryId":1,"description":"","price":2800,"brand":"LG","promotion":0},
    {"id":2,"name":"Réfrigérateur Samsung Blanc","image":"/assets/images/refrigerateur_samsung.jpeg","categoryId":1,"description":"","price":2400,"brand":"Samsung","promotion":0},
    {"id":3,"name":"Lave vaisselle Beko","image":"/assets/images/lave_vaisselle.png","categoryId":1,"description":"","price":1875,"brand":"BEKO","promotion":0},
    {"id":4,"name":"Oppo Smart Phone","image":"/assets/images/oppo_smart.jpg","categoryId":4,"description":"","price":1200,"brand":"OPPO","promotion":0},
    {"id":5,"name":"Hachoir","image":"/assets/images/hachoir.jpg","categoryId":2,"description":"","price":120,"brand":"Moulinex","promotion":0},
    {"id":6,"name":"TV 50","image":"/assets/images/tv-lg.jpg","categoryId":5,"description":"","price":1800,"brand":"LG","promotion":0}
  ] ;
  id:number=0;
  constructor(private ac:ActivatedRoute,private _service:ProductService){}
  ngOnInit(){
    this.ac.queryParamMap.subscribe(params=>{
      this.id= +params.get('id')!;
      console.log(params);
    })
  }
  
  isCategory(ident: number):boolean{
    return  this.id===0 || ident === this.id;
  }
  getProductsByCategoryId(idC:number){
    this._service.getProductsByIdCategory(idC).subscribe();
  }
}
