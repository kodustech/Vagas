import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {CategoryService} from "../category.service";



interface Category {
  name: string;
  description: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: any = []

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe(resp => {
      alert(resp.message);
      window.location.reload();
    }, error => {
      alert(error.message);
    })
  }

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(resp => {
      for (const d of (resp.data as any)) {
        this.categories.push({
          id: d.id,
          name: d.name,
          description: d.description
        });
      }
    },error => {
      alert(error.message);
    });
  }

}
