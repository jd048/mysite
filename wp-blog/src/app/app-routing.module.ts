
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { HomeComponent } from './home/home.component';
import { CreatorComponent } from './creator/creator.component';

const routes: Routes = [


  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
    
  },
  
  {
    path: 'blog',
    component: PostListComponent,
    pathMatch: 'prefix'
    
  },
  {
    path: ':slug',
    component: PostSingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Wpng2RoutingModule { }
