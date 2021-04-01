import { Component, OnInit } from '@angular/core';
import { PostService } from "../../services/post.service";
import { Post } from "../../models/Post";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dateTime: string;
  category: string = "Nenhuma";

  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.getAll();
  }

  filterDateTime(){
   this.posts = this.postService.filterForDateAndHour(this.dateTime);
  }

  filterCategory(category){
    this.posts = this.postService.filterForCategory(category);
   }

}
