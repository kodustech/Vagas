import { Component, OnInit } from '@angular/core';
import * as Icons from "../../../_assets/icons/sidebar";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  icons = Icons;

  constructor() { }

  ngOnInit(): void {
  }

}
