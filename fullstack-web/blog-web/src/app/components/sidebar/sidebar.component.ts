import { Component, OnInit } from '@angular/core';
import * as Icons from "../../styles/icons/sidebar";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
 
  icons = Icons;

  constructor() { }

  ngOnInit(): void {
    
  }

}
