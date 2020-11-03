import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentManagementComponent } from './student-management/student-management.component';
import { TeacherManagementComponent } from './teacher-management/teacher-management.component';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { ViewTeacherDetailComponent } from './view-teacher-detail/view-teacher-detail.component';
import { ViewStudentDetailComponent } from './view-student-detail/view-student-detail.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { TuitionCenterManagementComponent } from './tuition-center-management/tuition-center-management.component';
import { CourseManagementComponent } from './course-management/course-management.component';
import { CmsManagementComponent } from './cms-management/cms-management.component';
import { PaymentManagementComponent } from './payment-management/payment-management.component';
import { ManageReviewRatingComponent } from './manage-review-rating/manage-review-rating.component';
import { ManageContactSupportComponent } from './manage-contact-support/manage-contact-support.component';
import { ViewReportsComponent } from './view-reports/view-reports.component';
const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'students',
      component: StudentManagementComponent,
    },
    {
      path: 'teachers',
      component: TeacherManagementComponent,
    },
    {
      path: 'category',
      component: CategoryManagementComponent,
    },
    {
      path: 'edit-category',
      component: EditCategoryComponent,
    },
    {
      path: 'add-category',
      component: AddCategoryComponent,
    },
    {
      path: 'edit-teacher',
      component: EditTeacherComponent,
    },
    {
      path: 'edit-student',
      component: EditStudentComponent,
    },
    {
      path: 'view-teacher-detail',
      component: ViewTeacherDetailComponent,
    },
    {
      path: 'view-student-detail',
      component: ViewStudentDetailComponent,
    },
    {
      path: 'tuition-center',
      component: TuitionCenterManagementComponent,
    },
    {
      path: 'course',
      component: CourseManagementComponent,
    },
    {
      path: 'cms',
      component: CmsManagementComponent,
    },
    {
      path: 'payment',
      component: PaymentManagementComponent,
    },
    {
      path: 'review-and-rating',
      component: ManageReviewRatingComponent,
    },
    {
      path: 'contact-support',
      component: ManageContactSupportComponent,
    },
    {
      path: 'view-reports',
      component: ViewReportsComponent,
    },
    {
      path: 'add-teacher',
      component: AddTeacherComponent,
    },
    {
      path: 'add-student',
      component: AddStudentComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
