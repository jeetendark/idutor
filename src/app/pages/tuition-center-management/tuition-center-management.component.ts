import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
interface Teacher {
  name: string;
  teachImg: string;
  specialization: string;
  address: any;
  email: string;
  contact: string;
  status: string;
  experience: number;
}

const TEACHERS: Teacher[] = [
  {
    name: 'Neelesh',
    specialization: 'GYM Trainer',
    experience: 9,
    teachImg: 'assets/images/kate.png',
    address: 'B76, Sector 2, Noida',
    email: '9887555531',
    contact: 'abc@gmail.com',
    status:'Inactive'
  },
  {
    name: 'raaz',
    specialization: 'GYM Trainer',
    experience: 3,
    teachImg: 'assets/images/kate.png',
    address: 'B76, Sector 2, Noida',
    email: '9887555531',
    contact: 'abc@gmail.com',
    status:'active'
  },
  {
    name: 'Rohan',
    specialization: 'GYM Trainer',
    experience: 7,
    teachImg: 'assets/images/kate.png',
    address: 'B76, Sector 2, Noida',
    email: '9887555531',
    contact: 'abc@gmail.com',
    status:'Inactive'
  },
  {
    name: 'Tripti',
    specialization: 'GYM Trainer',
    experience: 5,
    teachImg: 'assets/images/kate.png',
    address: 'B76, Sector 2, Noida',
    email: '9887555531',
    contact: 'abc@gmail.com',
    status:'active'
  },
  {
    name: 'Garima',
    specialization: 'GYM Trainer',
    experience: 8,
    teachImg: 'assets/images/kate.png',
    address: 'B76, Sector 2, Noida',
    email: '9887555531',
    contact: 'abc@gmail.com',
    status:'active'
  },
  {
    name: 'Nikki',
    specialization: 'GYM Trainer',
    experience: 6,
    teachImg: 'assets/images/kate.png',
    address: 'B76, Sector 2, Noida',
    email: '9887555531',
    contact: 'abc@gmail.com',
    status:'Inactive'
  }
];
@Component({
  selector: 'ngx-tuition-center-management',
  templateUrl: './tuition-center-management.component.html',
  styleUrls: ['./tuition-center-management.component.scss']
})
export class TuitionCenterManagementComponent {
  studentForm = this.fb.group({
    name: [{value: 'Paul', disabled: true}],
    contact: [{value:'6875585858', disabled: true}],
    email: [{value:'abc@abc.com', disabled: true}],
    centerName: [{value:'Sector 15 Noida', disabled: true}],
    address: this.fb.group({
      street: [{value:'38', disabled: true}],
      city: [{value:'Dwarka', disabled: true}],
      state: [{value:'New Delhi', disabled: true}],
      country: [{value:'India', disabled: true}],
      zip: [{value:'110045', disabled: true}]
    }),
    paymentDetails: this.fb.group({
      accHolder: [{value:'Jhon Doe', disabled: true}],
      bank: [{value:'State Bank of India', disabled: true}],
      ifsc: [{value:'SBI001234', disabled: true}],
      accNumber: [{value:'9966 6444 5353', disabled: true}],
    })
  });
  teachers: Teacher[];
 

  constructor(private fb: FormBuilder) {
    this.refreshTeachers();
   }
 

  updateDetails() {
    this.studentForm.patchValue({
    });
  }
  refreshTeachers() {
    this.teachers = TEACHERS;
  }
  onSubmit() {

    console.warn(this.studentForm.value);
  }
}
