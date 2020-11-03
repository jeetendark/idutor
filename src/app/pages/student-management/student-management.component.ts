import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  studImg: string;
  dob: string;
  standard: string;
  email: string;
  contact: string;
  status : string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {status: 'Active', email: 'abc1@gm.com', contact: '987777654', studImg: 'assets/images/jack.png', dob: '27-09-1990',name: 'Jordan', standard: 'VIII'},
  {status: 'Active', email: 'abc@gm.com', contact: '987777654', studImg: 'assets/images/jack.png', dob: '27-09-1990',name: 'Helli',  standard: 'IX'},
  {status: 'Inactive', email: 'abc3@gm.com', contact: '987747654', studImg: 'assets/images/jack.png', dob: '27-09-1990',name: 'Jhon', standard: 'X'},
  {status: 'Active', email: 'abc@gm.com', contact: '987777654', studImg: 'assets/images/jack.png', dob: '27-09-1990',name: 'Roshan',  standard: 'II'},
  {status: 'Inactive', email: 'abc4@gm.com', contact: '987777654', studImg: 'assets/images/jack.png', dob: '27-09-1990',name: 'Lila', standard: 'V'},
  {status: 'Active', email: 'abc2@gm.com', contact: '987777654', studImg: 'assets/images/jack.png', dob: '27-09-1990',name: 'kabin',  standard: 'IV'},
  {status: 'Inactive', email: 'abc5@gm.com', contact: '9876677654', studImg: 'assets/images/jack.png', dob: '27-09-1990',name: 'Neel',  standard: 'XII'},
  {status: 'Active', email: 'abcc@gm.com', contact: '9877557654', studImg: 'assets/images/jack.png', dob: '27-09-1990',name: 'Shivaay',  standard: 'VII'},
  {status: 'Inactive', email: 'abc@gm.com', contact: '987777654', studImg: 'assets/images/jack.png', dob: '27-09-1990', name: 'Anjum', standard: 'XI'},
  {status: 'Active', email: 'abc@gm.com', contact: '987777654', studImg: 'assets/images/jack.png', dob: '27-09-1990', name: 'Tripti',  standard: 'X'},
];
@Component({
  selector: 'ngx-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.scss']
})
export class StudentManagementComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'dob', 'standard', 'contact','email', 'status','action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}