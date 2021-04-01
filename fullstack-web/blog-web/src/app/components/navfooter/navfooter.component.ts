import { Component, OnInit } from '@angular/core';
import * as Icons from "../../../assets/icons";

@Component({
  selector: 'app-navfooter',
  templateUrl: './navfooter.component.html',
  styleUrls: ['./navfooter.component.css']
})
export class NavfooterComponent implements OnInit {

  icons = Icons

  constructor() { }

  ngOnInit(): void {
  }

}
