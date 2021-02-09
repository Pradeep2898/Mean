import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUri: string = 'http://localhost:3000/router';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private htttp: HttpClient) {}

  createStudents(data: any): Observable<any> {
    let url = `${this.baseUri}/create`;
    return this.htttp.post(url, data);
  }

  getStudents() {
    return this.htttp.get(`${this.baseUri}`);
  }

  getStudent(id: Number): Observable<any> {
    let url = `${this.baseUri}/${id}`;
    return this.htttp.get(url, { headers: this.headers });
  }

  deleteStudent(id: Number): Observable<any> {
    let url = `${this.baseUri}/${id}`;
    return this.htttp.delete(url, { headers: this.headers });
  }

  updateStudent(id: Number, data: any): Observable<any> {
    let url = `${this.baseUri}/${id}`;
    return this.htttp.patch(url, data, { headers: this.headers });
  }
}
