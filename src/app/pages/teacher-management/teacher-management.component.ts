import { Component, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
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
  },
  {
    name: 'Jhon',
    specialization: 'GYM Trainer',
    experience: 10,
    teachImg: 'assets/images/kate.png',
    address: 'B76, Sector 2, Noida',
    email: '9887555531',
    contact: 'abc@gmail.com',
    status:'active'
  },
  {
    name: 'Max',
    specialization: 'GYM Trainer',
    experience: 9,
    teachImg: 'assets/images/kate.png',
    address: 'B76, Sector 2, Noida',
    email: '9887555531',
    contact: 'abc@gmail.com',
    status:'Inactive'
  },
  {
    name: 'Carl',
    specialization: 'GYM Trainer',
    experience: 9,
    teachImg: 'assets/images/kate.png',
    address: 'B76, Sector 2, Noida',
    email: '9887555531',
    contact: 'abc@gmail.com',
    status:'active'
  },
  {
    name: 'Rehan',
    specialization: 'GYM Trainer',
    experience: 9,
    teachImg: 'assets/images/kate.png',
    address: 'B76, Sector 2, Noida',
    email: '9887555531',
    contact: 'abc@gmail.com',
    status:'active'
  },
  {
    name: 'Kumar',
    specialization: 'GYM Trainer',
    experience: 9,
    teachImg: 'assets/images/kate.png',
    address: 'B76, Sector 2, Noida',
    email: '9887555531',
    contact: 'abc@gmail.com',
    status:'active'
  },
  {
    name: 'Rajat',
    specialization: 'GYM Trainer',
    experience: 9,
    teachImg: 'assets/images/kate.png',
    address: 'B76, Sector 2, Noida',
    email: '9887555531',
    contact: 'abc@gmail.com',
    status:'active'
  },
  {
    name: 'Neha',
    specialization: 'GYM Trainer',
    experience: 9,
    teachImg: 'assets/images/kate.png',
    address: 'B76, Sector 2, Noida',
    email: '9887555531',
    contact: 'abc@gmail.com',
    status:'active'
  }
];

@Component({
  selector: 'ngx-teacher-management',
  templateUrl: './teacher-management.component.html',
  styleUrls: ['./teacher-management.component.scss']
})
export class TeacherManagementComponent{
  teachers: Teacher[];

  constructor() {
    this.refreshTeachers();
  }

  refreshTeachers() {
    this.teachers = TEACHERS;
  }
}