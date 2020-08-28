import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DemoserviceService } from './demoservice.service';


@Component({
  selector: 'app-democrud',
  templateUrl: './democrud.component.html',
  styleUrls: ['./democrud.component.css']
})
export class DemocrudComponent implements OnInit {
  larray:any;
  
    
form=this.fb.group({
  userId:[],
  title:[],
  body:[]
})
constructor(private service:DemoserviceService,private fb:FormBuilder){
}
ngOnInit(): void {
  this.getData();
}

getData(){
  this.service.getData().subscribe((response)=>{
    this.larray=response;
    console.log(this.larray);
  })
}

createData(){
  this.service.createData(this.form.value).subscribe((response)=>{
    console.log(response);
  })
  this.form.reset();
}
  
}
  

