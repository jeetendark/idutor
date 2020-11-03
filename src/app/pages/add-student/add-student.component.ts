import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'ngx-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent {
  addStudentForm = this.fb.group({
    name: ['', Validators.required],
    contact: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });
 constructor(private fb: FormBuilder) { } 
  addDetails() {
    this.addStudentForm.patchValue({
      name: 'Dance Class',
      contact: '9897955033',
      email: 'weee@yahoo.com',
      password: 'abc',
      confirmPassword: 'abc'

    });
  }
  onSubmit() {
    console.warn(this.addStudentForm.value);
  }
}
