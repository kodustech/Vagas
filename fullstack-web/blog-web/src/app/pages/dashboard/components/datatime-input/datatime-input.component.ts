import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-datatime-input',
  templateUrl: './datatime-input.component.html',
  styleUrls: ['./datatime-input.component.css']
})
export class DatatimeInputComponent implements OnInit {

  @Input() dateTime: string;
  @Output() dateTimeChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
