import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../authentication/auth.guard';
import { PostsAddComponent } from './components/posts-add/posts-add.component';
import { PostsDetailsComponent } from './components/posts-details/posts-details.component';
import { PostsListsComponent } from './components/posts-lists/posts-lists.component';
import { PostsUpdateComponent } from './components/posts-update/posts-update.component';

const routes: Routes = [
  { path: 'list-posts', canActivate: [AuthGuard], component: PostsListsComponent },
  { path: 'detail-posts', canActivate: [AuthGuard], component: PostsDetailsComponent },
  { path: 'add-post', canActivate: [AuthGuard], component: PostsAddComponent },
  { path: 'update-post', canActivate: [AuthGuard], component: PostsUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }