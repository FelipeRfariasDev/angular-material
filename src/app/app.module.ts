import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsAddComponent } from './posts/components/posts-add/posts-add.component';
import { PostsUpdateComponent } from './posts/components/posts-update/posts-update.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsAddComponent,
    PostsUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
