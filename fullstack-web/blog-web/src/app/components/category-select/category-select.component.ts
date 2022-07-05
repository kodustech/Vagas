import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { categories } from "../../_store/categories";

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.css']
})
export class CategorySelectComponent implements OnInit {

  categories: string[] = categories;

  @Input() categoryPost: string;
  @Output() categoryPostChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
