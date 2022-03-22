import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../../model/post';
import { PostsService } from '../../service/posts.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-posts-lists',
  templateUrl: './posts-lists.component.html',
  styleUrls: ['./posts-lists.component.css']
})
export class PostsListsComponent implements OnInit {

  displayedColumns: string[] = ['id','titulo','descricao','imagem','btn'];
  dataSource = ELEMENT_DATA;

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

  getPaginate(url:any=null) {
    
    var valorBuscar = this.form.value.buscar;

    this.postsService.getPaginate(url,valorBuscar).subscribe((response: any) => {
      this.posts = response.posts.data;
      this.links = response.posts.links;
      
      if(!url){
        url = response.posts.path;
      }
      this.link_page_atual = url;
    }, error => {
      if(error.error.success==false || error.error.status==403){
        localStorage.setItem('accessToken','');
        this.router.navigate(['/']);
      }
    });
  }

  goToDetails(post: Post) {
    this.postsService.setPost(post);
    this.router.navigate(['/detail-posts']);
  }

  goToEdit(post: Post) {
    this.postsService.setPost(post);
    this.router.navigate(['/update-post']);
  }

  delete(post: Post) {
    this.postsService.delete(post!).subscribe((response:any)=>{
      if(response.success){
        this.getPaginate(this.link_page_atual);
        return;
      }
    });
  }
}
