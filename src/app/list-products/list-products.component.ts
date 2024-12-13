import { Component } from '@angular/core';
import { Product2Module } from '../models/product2/product2.module';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {
  listProducts : Product2Module[]=[ 
    {"id":1,"title":"Cuisinière","image":"assets/images/grands_electromenagers/cuisinière.png", "description":"699 dt", "promotion":false, "quantity":50, "categoryId":1}, 
    {"id":2,"title":"Réfrigérateur","image":"assets/images/grands_electromenagers/refrigerateur.jpeg", "description":"1500 dt", "promotion":false, "quantity":20, "categoryId":1}, 
    {"id":3,"title":"Robot Pétrin","image":"assets/images/petit_electromenager/robot_petrin.png", "description":"430 dt", "promotion":false, "quantity":150, "categoryId":2}, 
    {"id":4,"title":"Fer à repasser", "image":"assets/images/petit_electromenager/fer_a_repasser.png", "description":"130 dt", "promotion":false, "quantity":100, "categoryId":2}, 
    {"id":5,"title":"Oppo","image":"assets/images/smart_phones/Oppo.jpeg", "description":"920 dt", "promotion":false, "quantity":10, "categoryId":4}, 
    {"id":6,"title":"TV Téléfunkun", "image":"assets/images/tv_images_son/tv1.jpeg", "description":"845 dt", "promotion":false, "quantity":50, "categoryId":5},
  ] 
}
