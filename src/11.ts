import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-school-project',
  templateUrl: './my-school-project.component.html',
  styleUrls: ['./my-school-project.component.css']
})
export class MySchoolProjectComponent {
  students: any[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://api.example.com/students').subscribe((data: any[]) => {
      this.students = data;
    });
  }
}
