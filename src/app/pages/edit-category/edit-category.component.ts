import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'ngx-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent {
  EditCategoryForm = this.fb.group({
    name: ['Gitar Class', Validators.required],
    subcat: [''],
    importFile: ['assets/images/jack.png', Validators.required]
  });
 

  constructor(private fb: FormBuilder) {

   }

  updateCategory() {
    this.EditCategoryForm.patchValue({
      name: 'Dance Class',
      subcat: 'Bollywood Type',
      
    });
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.EditCategoryForm.value);
  }
  url: any;
  onSelectFile(event) { 
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();

        reader.readAsDataURL(event.target.files[0]); 

        reader.onload = (event) => {
          this.url = event.target.result;
        }
      }
  }
}

