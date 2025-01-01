import { Component,EventEmitter,Input, Output } from '@angular/core';
import { ShortlistModule } from '../models/shortlist/shortlist.module';
import { CategoryService } from '../category.service';
import { CategorieModule } from '../models/categorie/categorie.module';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() id:number=0;
  @Input() title:string=""; 
  @Input() image:string="";
  @Input() description:string=""; 
  @Input() available:boolean=true; 
  btnText:string="Add to shortlist"; 
  @Input() typeElement: string = 'category'; // Par défaut, "category"
  @Output() add=new EventEmitter<ShortlistModule>();
  addToShortlist(){
    const idUser = 1; // Valeur fixe pour cet exemple
    const shortlistItem: ShortlistModule = {
      id: this.id,
      idUser: idUser,
      idElement: this.id,
      typeElement: this.typeElement
    };
    this.add.emit(shortlistItem);
  }
  
}
