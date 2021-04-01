import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from "../../../../models/Post";
import { PostService } from "../../../../services/post.service";
import * as Icons from "../../../../../assets/icons";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input() postItem: Post;
  @Output() postRemoved = new EventEmitter<boolean> ();

  icons = Icons

  constructor(private postService: PostService) { }

  ngOnInit(): void {

  }

  deletePost(id){
    this.postService.removePost(id);
    this.postRemoved.emit(true)
  }

}
