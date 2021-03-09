import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  getPosts(category_id: number): Observable<any> {
    return this.http.get(environment.url_back + '/api/v1/posts/category/' + category_id)
  }

  createPost(postParams: any, category_id: number): Observable<any> {
    postParams.category_id = category_id
    return this.http.post(environment.url_back + '/api/v1/posts', postParams)
  }

  constructor(private http: HttpClient) { }
}
