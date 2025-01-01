import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import { CategorieModule } from '../models/categorie/categorie.module';
import { ShortlistModule } from '../models/shortlist/shortlist.module';
import { CardComponent } from '../card/card.component';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.css'
})
export class ListCategoriesComponent implements AfterViewInit{

  
  constructor(private _service:CategoryService) {}
  categories: CategorieModule[] = [
    { "id": 1, "title": "Grand électroménager", "image": "/assets/images/categorie_electromenager.jpg", "description": "Electroménager de grands tiers", "available": true }, 
    { "id": 2, "title": "Petit électroménager", "image": "/assets/images/categorie_petit_electromenager.jpg", "description": "Electroménager de petits tiers", "available": true }, 
    { "id": 3, "title": "Produits informatiques", "image": "/assets/images/categorie_produits_informatiques.jpg", "description": "PCs,consoles,etcs", "available": true }, 
    { "id": 4, "title": "Smart Phones", "image": "/assets/images/categorie_smartPhone.jpg", "description": "Des smartphones extensives", "available": true }, 
    { "id": 5, "title": "TV, images et son", "image": "/assets/images/categorie_tv_image_son.jpg", "description": "Télévisions avancés", "available": true }, 
    { "id": 6, "title": "Produits voiture", "image": "/assets/images/produits_nettoyages.jpg", "description": "Nettoyage du voiture plus efficace", "available": false }
  ];
  titre:string="";
  Category=null;
  id=0;
  afficherDescription(description:string){
    alert(description);
  };
  isTitle(title: string): boolean {
    return this.titre === '' || title.toLowerCase().includes(this.titre);
  }
  showDetails(category: any) {
    this.Category = category;  // Set the clicked category
  }

  shortList:ShortlistModule[]=[];
 
  onAddToShortlist(shortlistItem: ShortlistModule) {
    if (!this.shortList.find(item => item.idElement === shortlistItem.idElement && item.typeElement === shortlistItem.typeElement)) {
      this.shortList.push(shortlistItem);
      console.log('Shortlist mise à jour :', this.shortList);
    } else {
      console.log('Cet élément est déjà dans la shortlist.');
    }
  }

  @ViewChildren(CardComponent) cards!:QueryList<CardComponent>;
  private cardComponent!:CardComponent;

  ngAfterViewInit(): void {
    this.cards.forEach((card)=>{
      card.btnText="Add to shortlist";
    });
  }
  
  deleteCategory(category:CategorieModule){
    this._service.deleteCategoryFromBackend(category).subscribe();
  }
  getListCategories(){
    this._service.getListCategoriesFromBackend().subscribe(l=>{
      this.categories=l;
    });
  }
  getCategory(id: number) {
    this._service.getCategoryById(id).subscribe();
  }
}


