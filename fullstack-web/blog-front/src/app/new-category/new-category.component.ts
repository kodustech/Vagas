import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {

  categoryForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl()
  });

  createCategory() {
    console.log(this.categoryForm)
    return this.categoryService.createCategory(this.categoryForm.value).subscribe(resp => {
      alert("Categoria criada com sucesso")
      this.router.navigate(['/']);
    }, error => {
      let nameErrors = error.error.data.name
      let descriptionErrors = error.error.data.description
      for(const error of nameErrors) {
        alert('name ' + error)
      }

      for(const error of descriptionErrors) {
        alert('description ' + error)
      }
    })
  }

  constructor(
    private categoryService: CategoryService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

}
