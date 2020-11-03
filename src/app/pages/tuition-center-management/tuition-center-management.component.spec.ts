import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuitionCenterManagementComponent } from './tuition-center-management.component';

describe('TuitionCenterManagementComponent', () => {
  let component: TuitionCenterManagementComponent;
  let fixture: ComponentFixture<TuitionCenterManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuitionCenterManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuitionCenterManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
