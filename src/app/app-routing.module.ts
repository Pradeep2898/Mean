import { StudentsEditComponent } from './components/students-edit/students-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { StudentsAddComponent } from './components/students-add/students-add.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/students' },
  { path: 'students', component: StudentsListComponent },
  { path: 'add-student', component: StudentsAddComponent },
  { path: 'edit-student/:id', component: StudentsEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
