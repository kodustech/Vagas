import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import {HttpClientModule} from "@angular/common/http";
import { CategoryComponent } from './category/category.component';
import { NewCategoryComponent } from './new-category/new-category.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { NewPostComponent } from './new-post/new-post.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryComponent,
    NewCategoryComponent,
    EditCategoryComponent,
    NewPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
