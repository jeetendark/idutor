import { Component, ElementRef, OnDestroy, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  courseName: string;
  teacherName: string;
  date: string;
  star: string;
  review: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {courseName: 'Piano Learning', teacherName: 'Jhon', date: '07-01-2020', star: '4' , review: 'He is very humble person'},
  {courseName: 'Piano Learning', teacherName: 'Jhon', date: '07-04-2020', star: '3' , review: 'He is very humble person'},
  {courseName: 'Piano Learning', teacherName: 'Jhon', date: '07-05-2020', star: '2' , review: 'He is very humble person'},
  {courseName: 'Piano Learning', teacherName: 'Jhon', date: '07-03-2020', star: '3.5' , review: 'He is very humble person'},
  {courseName: 'Piano Learning', teacherName: 'Jhon', date: '07-09-2020', star: '4.5' , review: 'He is very humble person'},
  {courseName: 'Piano Learning', teacherName: 'Jhon', date: '07-10-2020', star: '4' , review: 'He is very humble person'},
];


@Component({
  selector: 'ngx-view-student-detail',
  templateUrl: './view-student-detail.component.html',
  styleUrls: ['./view-student-detail.component.scss']
})
export class ViewStudentDetailComponent implements AfterViewInit {
  studentForm = this.fb.group({
    name: [{value: 'Taniya Singhaniya', disabled: true}],
    coursesSubscribed: [{value:'Dancing', disabled: true}],
    contact: [{value:'6875585858', disabled: true}],
    email: [{value:'taniya@abc.com', disabled: true}],
    gender: [{value:'Female', disabled: true}],
    dob: [{value:'27-02-1993', disabled: true}],
    age: [{value:'27', disabled: true}],
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
  displayedColumns: string[] = ['courseName','teacherName', 'date', 'star','review'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
