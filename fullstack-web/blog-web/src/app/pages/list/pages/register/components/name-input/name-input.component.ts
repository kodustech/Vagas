import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css']
})
export class NameInputComponent implements OnInit {

  @Input() namePost: string;
  @Output() namePostChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
