import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './products/product/product.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TabPipe } from './tab.pipe';
import { HighlightDirective } from './highlight.directive';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductsCategoryQPComponent } from './products-category-qp/products-category-qp.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { FormProductComponent } from './form-product/form-product.component';
import { FormProduct2Component } from './form-product2/form-product2.component';
import { CardComponent } from './card/card.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ListUserComponent } from './list-user/list-user.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AddCategoryComponent } from './add-category/add-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    ListCategoriesComponent,
    TabPipe,
    HighlightDirective,
    NotFoundComponent,
    ProductsCategoryComponent,
    ProductsCategoryQPComponent,
    DetailsCategoryComponent,
    FormProductComponent,
    FormProduct2Component,
    CardComponent,
    ListProductsComponent,
    ListUserComponent,
    AddCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
