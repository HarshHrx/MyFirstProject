import { FullnameValidators } from './username.validator';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ashkyaform',
  templateUrl: './ashkyaform.component.html',
  styleUrls: ['./ashkyaform.component.css']
})

export class AshkyaformComponent implements OnInit {
  formDetails:any[];
  registrationForm = new FormGroup({
    fullName:new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      FullnameValidators.cannotContainSpace,
    ],FullnameValidators.shouldBeUnique),
    email:new FormControl(),
    mobileNumber:new FormControl(),
    address:new FormGroup({
      inputResidentialAddress:new FormControl(),
      inputPermanentAddress:new FormControl()
    })
  });

  get fullName()
  {
    return this.registrationForm.get('fullName');
  }

  constructor() { }

  ngOnInit(): void {
  }

  // registrForm(){
  //   this.formDetails = this.registrationForm.value;
  //   console.log(this.formDetails);    
  //   this.registrationForm.reset();
  // }

  registrForm(){
    this.registrationForm.setErrors({
      invalidLogin: true
    });
  }
}