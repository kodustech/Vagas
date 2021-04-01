import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from "../../../../services/post.service";
import { Post } from "../../../../models/Post";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  id: number;
  post: Post = new Post();
  isEdit: boolean = false;

  constructor(private postService: PostService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    if(this.id !== 0){
      this.isEdit = true;
      this.post = this.postService.getPost(this.id);
    }
  }

  savePost(){
    if(this.isEdit){
      this.postService.updatePost(this.id, this.post);
    }else{
      this.postService.savePost(this.post);
    }
    console.log(this.post)
  }

}
