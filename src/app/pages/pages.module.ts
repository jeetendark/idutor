import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { StudentManagementComponent } from './student-management/student-management.component';
import { TeacherManagementComponent } from './teacher-management/teacher-management.component';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ViewTeacherDetailComponent } from './view-teacher-detail/view-teacher-detail.component';
import { ViewStudentDetailComponent } from './view-student-detail/view-student-detail.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule, NbMenuModule, NbTabsetModule, NbSelectModule, NbDatepickerModule,NbButtonModule,NbTooltipModule } from '@nebular/theme';
import { TuitionCenterManagementComponent } from './tuition-center-management/tuition-center-management.component';
import { CourseManagementComponent } from './course-management/course-management.component';
import { CmsManagementComponent } from './cms-management/cms-management.component';
import { PaymentManagementComponent } from './payment-management/payment-management.component';
import { ManageReviewRatingComponent } from './manage-review-rating/manage-review-rating.component';
import { ManageContactSupportComponent } from './manage-contact-support/manage-contact-support.component';
import { ViewReportsComponent } from './view-reports/view-reports.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    MiscellaneousModule,
    Ng2SmartTableModule,
    NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule,NbButtonModule, NbTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    NbTabsetModule,
    NbSelectModule,
    NbDatepickerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  declarations: [
    PagesComponent,
    StudentManagementComponent,
    TeacherManagementComponent,
    CategoryManagementComponent,
    EditCategoryComponent,
    EditStudentComponent,
    EditTeacherComponent,
    ViewTeacherDetailComponent,
    ViewStudentDetailComponent,
    TuitionCenterManagementComponent,
    CourseManagementComponent,
    CmsManagementComponent,
    PaymentManagementComponent,
    ManageReviewRatingComponent,
    ManageContactSupportComponent,
    ViewReportsComponent,
    AddTeacherComponent,
    AddStudentComponent,
    AddCategoryComponent
  ],
})
export class PagesModule {
}
