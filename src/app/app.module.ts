import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsAddComponent } from './posts/components/posts-add/posts-add.component';
import { PostsUpdateComponent } from './posts/components/posts-update/posts-update.component';
import { PostsDetailsComponent } from './posts/components/posts-details/posts-details.component';
import { PostsListsComponent } from './posts/components/posts-lists/posts-lists.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsAddComponent,
    PostsUpdateComponent,
    PostsDetailsComponent,
    PostsListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
