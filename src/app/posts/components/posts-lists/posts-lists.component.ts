import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../../model/post';
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-posts-lists',
  templateUrl: './posts-lists.component.html',
  styleUrls: ['./posts-lists.component.css']
})
export class PostsListsComponent implements OnInit {

  posts: Post[] = [];
  links:any="";
  link_page_atual = "";

  post:Post|undefined;

  form = new FormGroup({
    buscar: new FormControl('', Validators.required)
  });

  constructor(
    private postsService: PostsService, 
    private router: Router) {
  }

  ngOnInit(): void {
    this.getPaginate();
  }

  getPaginate(){
    var valorBuscar = this.form.value.buscar;
    console.log(valorBuscar);
  }

}
