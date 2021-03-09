import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../category.service";
import {PostService} from "../post.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category: any = null
  posts: any = []


  deletePost(id: number) {
    this.postService.deletePost(id).subscribe(resp => {
      alert(resp.message);
      window.location.reload();
    }, error => {
      alert(error.message);
    })
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private postService: PostService
    ) { }

  ngOnInit(): void {
    let category_id = this.activatedRoute.snapshot.params.id;
    this.categoryService.getCategory(category_id).subscribe(resp => {
      this.category = {
        id: resp.data.id,
        name: resp.data.name,
        description: resp.data.description
      }
    });
    this.postService.getPosts(category_id).subscribe(resp => {
      for (const d of (resp.data as any)) {
        this.posts.push({
          id: d.id,
          title: d.title,
          text: d.text,
          created_at: d.created_at
        })
      }
    },error => {
      alert(error.message);
    });

  }


}
