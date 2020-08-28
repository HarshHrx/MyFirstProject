import { FormGroup, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactiveformarray',
  templateUrl: './reactiveformarray.component.html',
  styleUrls: ['./reactiveformarray.component.css']
})
export class ReactiveformarrayComponent implements OnInit {

  form=new FormGroup({
    formArrayy:new FormArray([])
  });

  constructor() { }

  ngOnInit(): void {
  }

  get faName(){
    return this.form.get('formArrayy') as FormArray;

  }
  addElement(a:HTMLInputElement)
  {
    this.faName.push(new FormControl(a.value));
    a.value = ' '; 
  }
  
  removeAt(topic:FormControl){
      var index = this.faName.controls.indexOf(topic);
      this.faName.removeAt(index);
  }

  // addEle(ele:HTMLInputElement)
  // {
  //  this.faName.push(new FormControl(ele.value));
  //  ele.value=' '; 
  // }

  // removeEle(top:FormGroup)
  // {
  //   var index =this.faName.controls.indexOf(top);
  //   this.faName.removeAt(index);
  // }
}
