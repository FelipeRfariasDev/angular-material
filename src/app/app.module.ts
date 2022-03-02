import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsAddComponent } from './posts/components/posts-add/posts-add.component';
import { PostsUpdateComponent } from './posts/components/posts-update/posts-update.component';
import { PostsDetailsComponent } from './posts/components/posts-details/posts-details.component';
import { PostsListsComponent } from './posts/components/posts-lists/posts-lists.component';
import { LoginComponent } from './authentication/components/login/login.component';
import { NewUserComponent } from './authentication/components/new-user/new-user.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsAddComponent,
    PostsUpdateComponent,
    PostsDetailsComponent,
    PostsListsComponent,
    LoginComponent,
    NewUserComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
