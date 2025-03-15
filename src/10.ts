
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MySchoolProjectService {
  constructor(private http: HttpClient) {}

  getCourseData(): Observable<any> {
    return this.http.get('https://api.myschoolproject.com/courses');
  }
}