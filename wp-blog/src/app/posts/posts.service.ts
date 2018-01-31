import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { Post } from './post';
import { environment } from '../../environments/environment';

@Injectable()
export class PostsService {

  private _wpBase = 'https://mannybernard.net/wp-json/wp/v2/';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {

      return this.http.get<Post[]>(this._wpBase + 'posts');

  }

  getPost(slug: string): Observable<Post[]> {

      return this.http.get<Post[]>(this._wpBase + `posts?slug=${slug}`);

  }

}
