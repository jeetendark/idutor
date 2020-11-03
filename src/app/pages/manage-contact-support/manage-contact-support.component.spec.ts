import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageContactSupportComponent } from './manage-contact-support.component';

describe('ManageContactSupportComponent', () => {
  let component: ManageContactSupportComponent;
  let fixture: ComponentFixture<ManageContactSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageContactSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageContactSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
