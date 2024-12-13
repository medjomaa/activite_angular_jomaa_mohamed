import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductModule {
  id!: number;
  name!: string;
  image!:string;
  categoryId!: number;
  description!: string;
  price!: number; 
  brand!:string; 
  promotion!: number; 
 }
