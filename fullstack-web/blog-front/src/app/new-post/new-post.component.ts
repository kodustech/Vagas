import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../post.service";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup

  category_id: number = this.activatedRoute.snapshot.params.category_id

  createPost() {
    return this.postService.createPost(this.postForm.value, this.category_id).subscribe(resp => {
      alert("Categoria criada com sucesso")
      this.router.navigate(['/categories/' + this.category_id]);
    }, error => {
      let titleErrors = error.error.data.title
      let textErrors = error.error.data.text
      for(const error of titleErrors) {
        alert('title ' + error)
      }
      for(const error of textErrors) {
        alert('text ' + error)
      }
    })
  }

  constructor(
    private postService: PostService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.postForm = new FormGroup({
      title: new FormControl(),
      text: new FormControl()
    });
  }

  ngOnInit(): void {
  }

}
