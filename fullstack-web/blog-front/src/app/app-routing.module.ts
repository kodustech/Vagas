import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoriesComponent} from "./categories/categories.component";
import {CategoryComponent} from "./category/category.component";
import {NewCategoryComponent} from "./new-category/new-category.component";

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'categories/:id', component: CategoryComponent},
  { path: 'new/category', component: NewCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
