import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'ngx-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent {
  studentForm = this.fb.group({
    name: ['', Validators.required],
    importFile: ['', Validators.required],
    age: [''],
    dob: [''],
    gender: [''],
    contact: ['', Validators.required],
    email: ['', Validators.required],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  });
  @ViewChild('labelImport')
  labelImport: ElementRef;
  fileToUpload: File = null;
  selectedItem = 'female';

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
