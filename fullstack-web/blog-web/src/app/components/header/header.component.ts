import { Component, OnInit } from '@angular/core';
import * as Icons from "../../../_assets/icons/header";

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
