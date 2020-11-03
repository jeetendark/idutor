import { Injectable } from '@angular/core';
import { SmartTableData } from '../data/smart-table';

@Injectable()
export class SmartTableService extends SmartTableData {

  data = [{
    id: 1,
    firstName: 'Mark',
    lastName: 'Otto',
    status: 'Inactive',
    email: 'mdo@gmail.com',
    contact: '99999989',
  }, {
    id: 2,
    firstName: 'Jacob',
    lastName: 'Thornton',
    status: 'active',
    email: 'fat@yandex.ru',
    contact: '988698867',
  }, {
    id: 3,
    firstName: 'Larry',
    lastName: 'Bird',
    status: 'active',
    email: 'twitter@outlook.com',
    contact: '88578588768',
  }, {
    id: 4,
    firstName: 'John',
    lastName: 'Snow',
    status: 'active',
    email: 'snow@gmail.com',
    contact: '979707797',
  }, {
    id: 5,
    firstName: 'Jack',
    lastName: 'Sparrow',
    status: 'Inactive',
    email: 'jack@ya9ndex.ru',
    contact: '87766',
  }, {
    id: 6,
    firstName: 'Ann',
    lastName: 'Smith',
    status: 'active',
    email: 'ann@gmail.com',
    contact: '987097080',
  }, {
    id: 7,
    firstName: 'Barbara',
    lastName: 'Black',
    status: 'Inactive',
    email: 'barbara@yandex.ru',
    contact: '8577578',
  }, {
    id: 8,
    firstName: 'Sevan',
    lastName: 'Bagrat',
    status: 'active',
    email: 'sevan@outlook.com',
    contact: '9876543',
  }, {
    id: 9,
    firstName: 'Ruben',
    lastName: 'Vardan',
    status: 'Inactive',
    email: 'ruben@gmail.com',
    contact: '0987655',
  }, {
    id: 10,
    firstName: 'Karen',
    lastName: 'Sevan',
    status: 'active',
    email: 'karen@yandex.ru',
    contact: '098766',
  }, {
    id: 11,
    firstName: 'Mark',
    lastName: 'Otto',
    status: 'active',
    email: 'mark@gmail.com',
    contact: '098890',
  }, {
    id: 12,
    firstName: 'Jacob',
    lastName: 'Thornton',
    status: 'Inactive',
    email: 'jacob@yandex.ru',
    contact: '098789',
  }, {
    id: 13,
    firstName: 'Haik',
    lastName: 'Hakob',
    status: 'Inactive',
    email: 'haik@outlook.com',
    contact: '654378',
  }, {
    id: 14,
    firstName: 'Garegin',
    lastName: 'Jirair',
    status: 'active',
    email: 'garegin@gmail.com',
    contact: '0987655',
  }, {
    id: 15,
    firstName: 'Krikor',
    lastName: 'Bedros',
    status: 'active',
    email: 'krikor@yandex.ru',
    contact: '9877665',
  }];

  getData() {
    return this.data;
  }
}
