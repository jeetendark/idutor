import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'ngx-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {
  addCategoryForm = this.fb.group({
    name: ['', Validators.required],
    subCat: [''],
    importFile: ['', Validators.required],
  });
  @ViewChild('labelImport')
  labelImport: ElementRef;
  fileToUpload: File = null;
 constructor(private fb: FormBuilder) { } 
 onFileChange(files: FileList) {
  this.labelImport.nativeElement.innerText = Array.from(files)
    .map(f => f.name)
    .join(', ');
  this.fileToUpload = files.item(0);
}

import(): void {
  console.log('import ' + this.fileToUpload.name);
}
  addDetails() {
    this.addCategoryForm.patchValue({
      name: 'Dance Class',
      subCat: 'kathak'

    });
  }
  onSubmit() {
    console.warn(this.addCategoryForm.value);
  }
}
