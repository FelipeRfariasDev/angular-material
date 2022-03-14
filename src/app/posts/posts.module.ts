import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
//import { BsModalService } from 'ngx-bootstrap/modal';
//import { ToastrModule } from 'ngx-toastr';
import { PostsAddComponent } from './components/posts-add/posts-add.component';
import { PostsDetailsComponent } from './components/posts-details/posts-details.component';
import { PostsListsComponent } from './components/posts-lists/posts-lists.component';
import { PostsUpdateComponent } from './components/posts-update/posts-update.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsService } from './service/posts.service';


@NgModule({
  declarations: [
    PostsAddComponent,
    PostsDetailsComponent,
    PostsListsComponent,
    PostsUpdateComponent
  ],
  imports: [
    PostsRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
    //ToastrModule.forRoot()
  ],
  //providers: [PostsService, BsModalService]
  providers: [PostsService]
})
export class PostsModule { }