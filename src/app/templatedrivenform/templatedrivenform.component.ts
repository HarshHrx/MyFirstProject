import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.css']
})
export class TemplatedrivenformComponent implements OnInit {
  user:string;
  password:string;
  avatarr:string;
  tempFlag:boolean = true;
  avatar=[
    {id:1,avatarname:'Batman'},
    {is:2,avatarname:'Superman'},
    {id:3,avatarname:'Flash'},
    {id:4,avatarname:'WonderWoman'},
    {id:5,avatarname:'Aquaman'}
  ];

    constructor() { }
  submit(f)
  {
    this.tempFlag=false;
    this.user=f.controls.username.value;
    this.password=f.controls.pass.value;
    this.avatarr=f.controls.ava.value;
    console.log(this.user);
    console.log(this.password);
    console.log(this.avatarr)
    f.reset();
  }


  ngOnInit(): void {
  }

}
