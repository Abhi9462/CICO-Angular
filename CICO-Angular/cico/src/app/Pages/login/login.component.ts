import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtRequestDto } from 'src/app/Models/jwt-request-dto';
import { Student } from 'src/app/Models/student';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(private service:StudentService, private router:Router){}
  ngOnInit(): void {
this.isLoggedIn()  }


dto:JwtRequestDto=new JwtRequestDto();
regx:RegExp = /^([(A-Z),(a-z)]+)([a-z]+)@([0-9]+$)/
student:Student=new Student();


public isLoggedIn(){
 
  let data:any = localStorage.getItem('TokenCico');
   if(data!=null)
  this.router.navigate(['/home'])

}


validate(){
 return this.regx.test(this.dto.userId)
}



public login(){
  if(!this.validate()){
alert("Please Enter a valid email address")
return
  }

  this.service.login(this.dto).subscribe({
   next:(data:any)=>{
      localStorage.setItem("TokenCico",data.object);
      localStorage.setItem("Student",JSON.stringify(data.anything));
      this.service.student=this.service.getLoggedInStudent();    
  this.router.navigate(['/home'])
  },

  error:(err:any)=>{
alert("Something went wrong")
  }
}
)}


getCurrentStudent(token:string){
  this.service.getCurrentStudent(token).subscribe(
   {next:(data:any)=>{
      localStorage.setItem("Student",JSON.stringify(data.object));
   this.service.student=   this.service.getLoggedInStudent();
   console.log(this.service.student.fullName)
    },

    error:(err:any)=>{
      alert("Something went wrong")

    }
  }
 
  )
}

}


