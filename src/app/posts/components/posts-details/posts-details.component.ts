import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../../model/post';
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html'
})
export class PostsDetailsComponent implements OnInit {

  post?:Post;
  comentId?:Number; 
  
  form = new FormGroup({
    descricao: new FormControl('', Validators.required)
  });

  constructor(private postservice: PostsService,
    private router: Router) { 
    this.post = postservice.getPost();
  }

  ngOnInit(): void {
  }

  addComentario(){

    this.postservice.addComentario(this.form.value.descricao).subscribe((response:any)=>{
      this.updateSelectedPost();
      this.form.reset();
    });
  }

  updateSelectedPost(){
    this.postservice.getPostById(this.post!.id!).subscribe((response:any)=>{
      this.postservice.setPost(response.post);
      this.post=this.postservice.getPost();
    });
  }

  deleteComentario(id: Number) {
    this.comentId = id;
    this.confirm();
  }

  confirm(): void {
    
    this.postservice.deleteComentario(this.comentId!).subscribe((response:any)=>{
      if(response.success){
        this.updateSelectedPost();
        return;
      }
    });

  }
}
