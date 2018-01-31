import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostsService]
})
export class PostListComponent implements OnInit {
   urls:ConstrainDOMStringParameters;
  posts: Post[];
uri:any;
htmls:any;
  constructor(private sanitize: DomSanitizer, private postsService: PostsService, private router: Router ) {
    
   }

  ngOnInit() {
    
    this.postsService.getPosts().subscribe( 
      (posts: Post[]) => { this.posts = posts;

      console.log(posts),
      (err: HttpErrorResponse) => err.error instanceof Error ? console.log('An error occurred:', err.error.message) : console.log(`Backend returned code ${err.status}, body was: ${err.error}`)});


      
  }



  selectPost(slug) {
  	this.router.navigate([slug]);
  }

}
