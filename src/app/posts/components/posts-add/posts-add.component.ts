import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-posts-add',
  templateUrl: './posts-add.component.html'
})
export class PostsAddComponent implements OnInit {

  selectedFile: File | undefined;

  form = new FormGroup({
    titulo: new FormControl('', Validators.required),
    descricao: new FormControl('', Validators.required)
  });

  constructor(private postservice: PostsService, private router: Router) { }

  ngOnInit(): void {
  }
  
  add() {
    const formData = new FormData();
    formData.append('titulo', this.form.get('titulo')?.value);
    formData.append('descricao', this.form.get('descricao')?.value);
    formData.append('imagem', this.selectedFile || '');

    this.postservice.post(formData).subscribe((response:any)=>{
      if(response.success){
        this.router.navigateByUrl('/list-posts');
        return;
      }
    });
  }

  inputFileChange(event: Event) {
    const element = event.target as HTMLInputElement;
    if (element.files && element.files[0]) {
      this.selectedFile = element.files[0];
    }
  }

}
