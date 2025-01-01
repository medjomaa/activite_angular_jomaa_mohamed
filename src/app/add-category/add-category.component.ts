import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';
import { CategorieModule } from '../models/categorie/categorie.module';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent implements OnInit{
  constructor(private _service:CategoryService){}
  addCategory(category:CategorieModule) {
    this._service.addCategory(category).subscribe();
  }
  updateCategory(category:CategorieModule){
    this._service.updateCategory(category).subscribe();
  }
  categoryForm!:FormGroup;
  ngOnInit(): void {
    this.categoryForm=new FormGroup(
      {
        title:new FormControl ('', [Validators.required]),
        image: new FormControl ('', [Validators.required]),
        description: new FormControl ('', [Validators.required]),
        available: new FormControl (false),
      }
    )
  }
  
}
