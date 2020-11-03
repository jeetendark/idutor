import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'ngx-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent {
  addTeacherForm = this.fb.group({
    name: ['', Validators.required],
    contact: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });
 constructor(private fb: FormBuilder) {}


 
  addDetails() {
    this.addTeacherForm.patchValue({
      name: 'Dance Class',
      contact: '9897955033',
      email: 'weee@yahoo.com',
      password: 'abc',
      confirmPassword: 'abc'

    });
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.addTeacherForm.value);
  }
}
