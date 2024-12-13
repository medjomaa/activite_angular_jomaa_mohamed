import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CategorieModule { 
  id!:number;
  title!:string;
  image!:string;
  description!:string;
  available!:boolean;
}
