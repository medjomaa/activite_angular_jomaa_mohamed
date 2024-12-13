import { Component } from '@angular/core';
import { CategorieModule } from '../models/categorie/categorie.module';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-category',
  templateUrl: './details-category.component.html',
  styleUrl: './details-category.component.css'
})
export class DetailsCategoryComponent {
  categorie:any;
  categories:CategorieModule[]=[
    { "id": 1, "title": "Grand électroménager", "image": "/assets/images/categorie_electromenager.jpg", "description": "Electroménager de grands tiers", "available": true }, 
    { "id": 2, "title": "Petit électroménager", "image": "/assets/images/categorie_petit_electromenager.jpg", "description": "Electroménager de petits tiers", "available": true }, 
    { "id": 3, "title": "Produits informatiques", "image": "/assets/images/categorie_produits_informatiques.jpg", "description": "PCs,consoles,etcs", "available": true }, 
    { "id": 4, "title": "Smart Phones", "image": "/assets/images/categorie_smartPhone.jpg", "description": "Des smartphones extensives", "available": true }, 
    { "id": 5, "title": "TV, images et son", "image": "/assets/images/categorie_tv_image_son.jpg", "description": "Télévisions avancés", "available": true }, 
    { "id": 6, "title": "Produits voiture", "image": "/assets/images/produits_nettoyages.jpg", "description": "Nettoyage du voiture plus efficace", "available": false }
  ];
  
  constructor(private ac:ActivatedRoute){}
  ngOnInit(){
    const categoryId = +this.ac.snapshot.paramMap.get('id')!;
    this.categorie = this.categories.find(cat => cat.id===categoryId);
  }
}
