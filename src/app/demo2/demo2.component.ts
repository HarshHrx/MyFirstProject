import { NotFoundError } from './not-found-error';
import { AppError } from './app-error';
import { IData } from './IData';
import { FormBuilder, Validators } from '@angular/forms';
import { DemoservService } from './demoserv.service';
import { Component, OnInit } from '@angular/core';
import { BadInput } from './bad-input';



@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {

  darray;
  

  form=this.fb.group({
    userid:[],
    title:[],
    body:[]
  })
  constructor(private service:DemoservService,private fb:FormBuilder) {
    this.darray = new Array();
   }

  
  getData(){
    this.service.getData()
    .subscribe(
      (response)=>{
      this.darray=response;
      console.log(this.darray);
    
    },(error:AppError)=>{
      if(error instanceof NotFoundError){
        alert("404 NOT FOUND")
      }
      else{
        throw error;
      }
    })
  }

  createData(){
    this.service.createData(this.form.value)
    .subscribe(
      (response)=>{
      console.log(response);
      // this.darray.splice(0,0,response);
      this.darray.push(response);
    },(error:AppError)=>{
      if(error instanceof BadInput){
    alert("400 BAD INPUT");        
      }
      else{
        throw error;
      }
    })
    this.form.reset();
  }

  updateData(post){
    this.service.updateData(this.form.value,post.id)
    .subscribe(
      (response)=>{
      console.log(response);
      let index=this.darray.indexOf(post);
      this.darray[index]=response;
   },(error:AppError)=>{
     if(error instanceof NotFoundError){
       alert("404 POST NOT FOUND");
     }else{
       throw error;
     }
   })
  }

  deleteData(post){
    this.service.deleteData(this.form.value)
    .subscribe(
      (response)=>{
      let index=this.darray.indexOf(post);
      this.darray.splice(index,1);
    },(error:AppError)=>{
      if(error instanceof NotFoundError){
        alert("404  NOT FOUND");
      }else{
        throw error;
      }
    })
  }
  
  ngOnInit(): void {
  }

}
