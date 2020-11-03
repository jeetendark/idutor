import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'ngx-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.scss']
})
export class EditTeacherComponent {
  studentForm = this.fb.group({
    name: ['', Validators.required],
    importFile: [''],
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
