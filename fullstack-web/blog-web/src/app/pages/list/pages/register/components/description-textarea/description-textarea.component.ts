import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-description-textarea',
  templateUrl: './description-textarea.component.html',
  styleUrls: ['./description-textarea.component.css']
})
export class DescriptionTextareaComponent implements OnInit {

  @Input() descriptionPost: string;
  @Output() descriptionPostChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
