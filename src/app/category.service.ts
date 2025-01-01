import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategorieModule } from './models/categorie/categorie.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrlCategory: string = "http://localhost:3001/categories";
  constructor(private http: HttpClient) { }
  getListCategoriesFromBackend(): Observable<CategorieModule[]> {
    return this.http.get<CategorieModule[]>(this.apiUrlCategory);
  }
  deleteCategoryFromBackend(category: CategorieModule): Observable<CategorieModule> {
    return this.http.delete<CategorieModule>(this.apiUrlCategory + '/' + category.id);
  }
  addCategory(category: CategorieModule): Observable<CategorieModule> {
    return this.http.post<CategorieModule>(this.apiUrlCategory, category);
  }
  getCategoryById(id: number): Observable<CategorieModule> {
    return this.http.get<CategorieModule>(this.apiUrlCategory + '/' + id);
  }
  updateCategory(category: CategorieModule): Observable<CategorieModule> { 
    return this.http.put<CategorieModule>(this.apiUrlCategory + '/' + category.id, category); 
  }
  
}

