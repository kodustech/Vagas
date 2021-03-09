import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../category.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {


  categoryForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl()
  });

  category_id: number = this.activatedRoute.snapshot.params.id

  editCategory() {
    console.log(this.categoryForm)
    return this.categoryService.editCategory(this.categoryForm.value, this.category_id).subscribe(resp => {
      alert("Categoria editada com sucesso")
      this.router.navigate(['/categories/' + this.category_id ]);
    }, error => {
      let nameErrors = error.error.data.name
      let descriptionErrors = error.error.data.description
      for(const error of nameErrors) {
        alert(error)
      }
      for(const error of descriptionErrors) {
        alert(error)
      }
    })
  }

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.categoryService.getCategory(this.category_id).subscribe(resp => {
      this.categoryForm = new FormGroup({
        name: new FormControl(resp.data.name),
        description: new FormControl(resp.data.description)
      })
    });
  }

  ngOnInit(): void {
  }

}
