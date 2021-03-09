import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../post.service";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  postForm = new FormGroup({
    title: new FormControl(),
    text: new FormControl(),
    category_id: new FormControl()
  });

  categories: any = []
  category_id: number = this.activatedRoute.snapshot.params.category_id
  id: number = this.activatedRoute.snapshot.params.id

  editPost() {
    return this.postService.editPost(this.postForm.value, this.id).subscribe(resp => {
      alert("Post editado com sucesso")
      this.router.navigate(['/categories/' + this.category_id ]);
    }, error => {
      let titleErrors = error.error.data.title
      let textErrors = error.error.data.text
      let categoryErros = error.error.data.category_id
      for(const error of titleErrors) {
        alert('title ' + error)
      }
      for(const error of textErrors) {
        alert('text ' + error)
      }
      for(const error of categoryErros) {
        alert('category '+ error)
      }
    })
  }

  constructor(
    private postService: PostService,
    private categoryService: CategoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.categoryService.getCategories().subscribe(resp => {
      for (const d of (resp.data as any)) {
        this.categories.push({
          id: d.id,
          name: d.name,
          description: d.description
        });
      }
    });
    this.postService.getPosts(this.id).subscribe(resp => {
      console.log(resp.data[0])
      this.postForm = new FormGroup({
        title: new FormControl(resp.data[0].title),
        text: new FormControl(resp.data[0].text),
        category_id: new FormControl(resp.data[0].category_id)
      });
    });
  }
  ngOnInit(): void {
  }

}
