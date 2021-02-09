import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-students-edit',
  templateUrl: './students-edit.component.html',
  styleUrls: ['./students-edit.component.css']
})
export class StudentsEditComponent implements OnInit {
  editStudentForm: any;

  constructor(
    private api: ApiService,
    private fBuilder: FormBuilder,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {
    this.editStudentForm = this.fBuilder.group({
      name: ['', Validators.required],
      marks: ['', Validators.required],
      studId: ['', Validators.required]
    });
  }
  updateStudent() {
    if (!this.editStudentForm.valid) return false;
    else if (window.confirm('Update this student?')) {
      let id = this.actRoute.snapshot.paramMap.get('id');
      this.api.updateStudent(Number(id), this.editStudentForm.value).subscribe(
        res => {
          this.router.navigateByUrl('/students');
          console.log('Student succesfully updated to database');
        },
        err => {
          window.alert('Updated Successfully!');
          this.router.navigateByUrl('/students');
          console.log(err);
        }
      );
    }
    return true;
  }

  ngOnInit(): void {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.api.getStudent(Number(id)).subscribe(data => {
      this.editStudentForm.setValue({
        name: data['name'],
        marks: data['marks'],
        studId: data['studId']
      });
    });
  }
}
