import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Product2Module {
  id!: number; 
  title!: string; 
  image!: string; 
  description!: string; 
  promotion!: boolean; 
  quantity!: number; 
  categoryId!: number;
}
