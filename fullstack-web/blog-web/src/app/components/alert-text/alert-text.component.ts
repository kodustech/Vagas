import { Component, OnInit } from '@angular/core';
import * as Icons from "../../../assets/icons";

@Component({
  selector: 'app-alert-text',
  templateUrl: './alert-text.component.html',
  styleUrls: ['./alert-text.component.css']
})
export class AlertTextComponent implements OnInit {

  icons = Icons;

  constructor() { }

  ngOnInit(): void {
    
  }

}
