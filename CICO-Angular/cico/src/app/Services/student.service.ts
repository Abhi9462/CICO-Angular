import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtRequestDto } from '../Models/jwt-request-dto';
import { Student } from '../Models/student';
import { Attendance } from '../Models/attendance';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  student:any;
  fullName:string="";
  role:string="";

  constructor(private httpClient:HttpClient) { }
baseUrl:String="http://localhost:8080/student";

public login(dto:JwtRequestDto){
return this.httpClient.post(`${this.baseUrl}/login`,dto)
}

public checkIn(attendance:Attendance){
  alert("service")
  return this.httpClient.post(`${this.baseUrl}/checkIn`,attendance);
}


public checkOut(attendance:Attendance){
  return this.httpClient.post(`${this.baseUrl}/checkOut`,attendance);
}



getCurrentStudent(token:string){
return this.httpClient.get(`${this.baseUrl}/getCurrentStudent/${token}`)
}

public getLoggedInStudent(){  
    let data:any = localStorage.getItem('Student');
    let student = JSON.parse(data);
    return student;
  
}

public getAttendance(){
  let data:any = localStorage.getItem('Attendance');
  let attendance = JSON.parse(data);
  return attendance;
}

}
