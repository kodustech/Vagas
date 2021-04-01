import { Component, OnInit, Input } from '@angular/core';
import { Post } from "../../../../models/Post";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() postCard: Post;

  dateFormat: string;
  hoursFormat: string;

  constructor() { }

  ngOnInit(): void {
    this.dateFormat = this.postCard.dateAndHour.toLocaleDateString();
    this.hoursFormat = this.postCard.dateAndHour.getHours()+":"+this.postCard.dateAndHour.getMinutes()
  }

}
