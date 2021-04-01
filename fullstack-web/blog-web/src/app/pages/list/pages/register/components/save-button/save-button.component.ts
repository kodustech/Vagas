import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.css']
})
export class SaveButtonComponent implements OnInit {
  @Output() saveEvent = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.saveEvent.emit(true)
  }

}
