import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductsCategoryQPComponent } from './products-category-qp/products-category-qp.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { FormProductComponent } from './form-product/form-product.component';
import { FormProduct2Component } from './form-product2/form-product2.component';
import { ListUserComponent } from './list-user/list-user.component';
import { AddCategoryComponent } from './add-category/add-category.component';

const routes: Routes = [
  {path:'home',component:HomeComponent,children:[
    {path:'details/:id',component:DetailsCategoryComponent},
    {path:'productsCategory/:id',component:ProductsCategoryComponent},
    {path:'productsCategoryQP',component:ProductsCategoryQPComponent}
    
  ]},
  {path:'product',loadChildren:()=>import('./products/products.module').then(p=>p.ProductsModule)},
  {path:'apropos',loadChildren:()=>import('./apropos/apropos.module').then(a=>a.AproposModule)},
  {path:'contact',loadChildren:()=>import('./contact/contact.module').then(c=>c.ContactModule)},
  {path:'profile',loadChildren:()=>import('./profile/profile.module').then(pr=>pr.ProfileModule)},
  {path:'addProduct',component:FormProductComponent},
  {path:'addProduct2',component:FormProduct2Component},
  {path:'listUser',component:ListUserComponent},
  {path:'addCategory',component:AddCategoryComponent},
  {path:'addCategory/:id',component:AddCategoryComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
