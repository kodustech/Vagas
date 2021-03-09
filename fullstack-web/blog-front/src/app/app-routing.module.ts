import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoriesComponent} from "./categories/categories.component";
import {CategoryComponent} from "./category/category.component";
import {NewCategoryComponent} from "./new-category/new-category.component";
import {EditCategoryComponent} from "./edit-category/edit-category.component";
import {NewPostComponent} from "./new-post/new-post.component";
import {EditPostComponent} from "./edit-post/edit-post.component";

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'categories/:id', component: CategoryComponent},
  { path: 'new/category', component: NewCategoryComponent},
  { path: 'edit/category/:id', component: EditCategoryComponent},
  { path: 'categories/:category_id/new/post', component: NewPostComponent},
  { path: 'categories/:category_id/edit/post/:id', component: EditPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
