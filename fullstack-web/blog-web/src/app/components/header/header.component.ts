import { Component, OnInit } from '@angular/core';
import * as Icons from "../../../assets/icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  icons = Icons

  constructor() { }

  ngOnInit(): void {
  }

}
