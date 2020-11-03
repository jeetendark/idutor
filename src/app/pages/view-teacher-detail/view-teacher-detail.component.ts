import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'ngx-view-teacher-detail',
  templateUrl: './view-teacher-detail.component.html',
  styleUrls: ['./view-teacher-detail.component.scss']
})
export class ViewTeacherDetailComponent {
  studentForm = this.fb.group({
    name: [{value:'Jack Doe', disabled: true}],
    contact: [{value:'998989797', disabled: true}],
    email: [{value:'abc@gmail.com', disabled: true}],
    specialization: [{value:'swimming', disabled: true}],
    experience: [{value:'9 years', disabled: true}],
    gender: [{value:'male', disabled: true}],
    dob: [{value:'27-02-1993', disabled: true}],
    age: [{value:'27', disabled: true}],
    qualification: this.fb.group({
      education: [{value:'B.Tech', disabled: true}],
      university: [{value:'Technical University', disabled: true}],
      yearOfPass: [{value:'2012', disabled: true}]
    }),
    address: this.fb.group({
      street: [{value:'38', disabled: true}],
      city: [{value:'Dwarka', disabled: true}],
      state: [{value:'New Delhi', disabled: true}],
      country: [{value:'India', disabled: true}],
      zip: [{value:'110045', disabled: true}]
    })
  });
  @ViewChild('labelImport')
  labelImport: ElementRef;
  fileToUpload: File = null;
 

  constructor(private fb: FormBuilder) {

   }
  onFileChange(files: FileList) {
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(', ');
    this.fileToUpload = files.item(0);
  }

  import(): void {
    console.log('import ' + this.fileToUpload.name);
  }

  updateDetails() {
    this.studentForm.patchValue({
      name: 'Dance Class',
      contact: '9897955033',
      email: 'weee@yahoo.com',
      address: {
        street: '123 Drew Street',
        zip: '201301'
      }
    });
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.studentForm.value);
  }
}
