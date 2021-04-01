import { Component, OnInit } from '@angular/core';
import { Post } from "../../models/Post";
import { PostService } from "../../services/post.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.getAll();
  }

  refreshList(){
    this.posts = this.postService.getAll();
  }


}
