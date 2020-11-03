import { Component} from '@angular/core';
interface Category {
  cat_name: string;
  studImg: string;
  status: string;
}

const CAT: Category[] = [
  {
    cat_name: 'advanture',
    studImg: 'assets/images/camera3.jpg',
    status:'Inactive'
  },
  {
    cat_name: 'writing',
    studImg: 'assets/images/camera3.jpg',
    status:'active'
  },
  {
    cat_name: 'mass-comm',
    studImg: 'assets/images/camera3.jpg',
    status:'Inactive'
  },
  {
    cat_name: 'graphics',
    studImg: 'assets/images/camera3.jpg',
    status:'active'
  },
  {
    cat_name: 'web-design',
    studImg: 'assets/images/camera3.jpg',
    status:'active'
  },
  {
    cat_name: 'cooking',
    studImg: 'assets/images/camera3.jpg',
    status:'Inactive'
  },
  {
    cat_name: 'GYM',
    studImg: 'assets/images/camera3.jpg',
    status:'active'
  },
  {
    cat_name: 'EVS',
    studImg: 'assets/images/camera3.jpg',
    status:'Inactive'
  },
  {
    cat_name: 'math',
    studImg: 'assets/images/camera3.jpg',
    status:'active'
  },
  {
    cat_name: 'science',
    studImg: 'assets/images/camera3.jpg',
    status:'active'
  },
  {
    cat_name: 'driving',
    studImg: 'assets/images/camera3.jpg',
    status:'active'
  },
  {
    cat_name: 'dancing',
    studImg: 'assets/images/camera3.jpg',
    status:'active'
  },
  {
    cat_name: 'swimmming',
    studImg: 'assets/images/camera3.jpg',
    status:'active'
  }
];
@Component({
  selector: 'ngx-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.scss']
})
export class CategoryManagementComponent {
  selectedItem = '1';
  categories: Category[];

  constructor() {
    this.refreshCategory();
  }

  refreshCategory() {
    this.categories = CAT
  }
}