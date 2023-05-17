import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{


   constructor(public service:StudentService){}
  ngOnInit(): void {
    
    this.getCurrentStudent();
  }

  getCurrentStudent(){
    this.service.student=this.service.getLoggedInStudent()
      }
}
