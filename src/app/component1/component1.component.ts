import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

title="List of Courses";
ngOnInit()
{
  
}

getTitle()
{
  return this.title;
}
serv;
constructor(service:ServiceService)
{
  this.serv=service.getService();
}
onSave($event)
{
  
  console.log("Button Clicked",$event);
}
onDivClick()
{
  console.log("Div Clicked");
}

onKeyUp(email)
{
  console.log("Enter Was Pressed"+email);
}
emaill="hrx";
onKeyUpp()
{
  console.log(this.emaill);
}

coursee={
  title:"The Angular Course",
  rating:4.2562,
  students:50321,
  price:190.95,
  releasedate:new Date(2020,7,10)
}
}
