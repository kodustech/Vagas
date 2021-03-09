import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  getCategories(): Observable<any> {
    return this.http.get(environment.url_back +'/api/v1/categories')
  }

  getCategory(id: number): Observable<any> {
    return this.http.get(environment.url_back + '/api/v1/categories/' + id)
  }

  constructor(
    private http: HttpClient
  ) {
  }
}
