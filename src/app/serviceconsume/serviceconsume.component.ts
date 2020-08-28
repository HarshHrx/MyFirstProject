import { ServicedataService } from './servicedata.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-serviceconsume',
  templateUrl: './serviceconsume.component.html',
  styleUrls: ['./serviceconsume.component.css']
})
export class ServiceconsumeComponent implements OnInit {
  larray: [];

  form=this.fb.group({
    userId:[],
    title:[],
    body:[]
  })

  constructor(private service: ServicedataService,private fb:FormBuilder) {

  }
  ngOnInit(): void {
    this.getData();
    // this.createData();
  }

  getData() {
    this.service.getData().subscribe((response) => {
      this.larray = response;
      console.log(this.larray);
    })
  }

  createData() {
    // let post = {
    //   userId: 1,
    //   title: 'harsh',
    //   body: 'ashokBuilder'
    // }
    this.service.createData(this.form.value).subscribe((response) => {
      console.log(response);
    })
    this.form.reset();
  }
























  // posts:Array<any>[];
  // private url='https://jsonplaceholder.typicode.com/posts';
  //   constructor(private http: HttpClient) {
  //     http.get<any>(this.url)
  //     .subscribe(response => {
  //       this.posts=response;
  //       console.log(this.posts);

  //     });
  //    }

  //    createPost(input:HTMLInputElement){
  //     let post:any= {title:input.value};
  //     input.value='';

  //     this.http.post(this.url, post)
  //     .subscribe(Response=>{
  //       post=Response;
  //       this.posts.splice(0,0,post);
  //       console.log(post);
  //     })
  //    }

}
