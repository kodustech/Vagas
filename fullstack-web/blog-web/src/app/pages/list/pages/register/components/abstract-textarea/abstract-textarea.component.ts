import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-abstract-textarea',
  templateUrl: './abstract-textarea.component.html',
  styleUrls: ['./abstract-textarea.component.css']
})
export class AbstractTextareaComponent implements OnInit {

  @Input() abstractPost: string;
  @Output() abstractPostChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
