import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-add',
  templateUrl: './students-add.component.html',
  styleUrls: ['./students-add.component.css']
})
export class StudentsAddComponent implements OnInit {
  studentForm: any;
  constructor(
    private api: ApiService,
    private fBuilder: FormBuilder,
    private router: Router
  ) {
    this.studentForm = this.fBuilder.group({
      name: ['', Validators.required],
      marks: ['', Validators.required],
      studId: ['', Validators.required]
    });
  }

  createStudent() {
    if (!this.studentForm.valid) return false;
    else if (window.confirm('Submit this student?')) {
      this.api.createStudents(this.studentForm.value).subscribe(
        res => {
          this.router.navigateByUrl('/students');
          console.log('Student succesfully added to database');
        },
        err => {
          window.alert('Failed to add!');
          console.log(err);
        }
      );
    }
    return true;
  }
  ngOnInit(): void {}
}
