import { Component, OnInit } from '@angular/core';
import { DatePipe, JsonPipe, Time } from '@angular/common';
import { StudentService } from 'src/app/Services/student.service';
import { Student } from 'src/app/Models/student';
import { Router } from '@angular/router';
import { Attendance } from 'src/app/Models/attendance';
import * as moment from 'moment';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss'],
  host: {'collision-id': 'RightSidebarComponent'},
})

export class RightSidebarComponent implements OnInit {
currentTime:any;
today:any;
dayMonthDate:any;
checkOutTime:any;
interval:any;
 time:number=0;
 totalHrs:any;
checkInTime:any;

attendance:Attendance=new Attendance();
receipt:any;

constructor(private datePipe: DatePipe, public service:StudentService, private router:Router) {  
 
}




ngOnInit(): void {

  this.getAttendance();

    setInterval(() => {
      this.updateTime();
    }, 1000);
this.setDate();


   }

   logout(){
    localStorage.removeItem("TokenCico")
    localStorage.removeItem("Student")
    this.router.navigate([""])
   }


   getAttendance(){
   this.attendance= this.service.getAttendance();
   }
  

  setDate(){
    const today: Date = new Date();
    this.dayMonthDate= today.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
  });
}

checkIn(){  

}



checkOut(){
 
  
  
  }


public startTimer() {

}

pauseTimer() {
   clearInterval(this.interval);
 }

  updateTime() {
    const now = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    const istTime = this.datePipe.transform(now, 'H:mm:ss', 'UTC+5:30');
    this.currentTime = istTime;

    if( this.currentTime=='11:59:59 PM'){
     // this.attendance.checkInTime=undefined;
      this.attendance.checkOutTime=undefined;
      this.interval=undefined;
    }
  }
 }
