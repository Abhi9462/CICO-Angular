import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private service:StudentService,private router:Router){}
  ngOnInit(): void {
    this.isLoggedIn()
    
  }

  
  public isLoggedIn(){ 
    let data:any = localStorage.getItem('TokenCico');
     if(data==null)
    this.router.navigate([''])  
  }
}
