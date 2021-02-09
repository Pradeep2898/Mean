import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  Student: any = [];
  constructor(private api: ApiService) {
    api.getStudents().subscribe(data => {
      this.Student = data;
    });
  }
  removeStudent(id: Number, index: Number) {
    if (window.confirm('Are you sure?')) {
      this.api.deleteStudent(id).subscribe(data => {
        this.Student.splice(index, 1);
      });
    }
  }
  ngOnInit(): void {}
}
