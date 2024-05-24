import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private router : Router) { }

  username: string="";
  userPassword: string="";
  DisabledFlag:boolean=true;

  ShowPasswordFlag:boolean=false;

  ngOnInit(): void {
  }
  showPasswordFun(event){
    this.ShowPasswordFlag=true;
  }
  submitData(){
    alert("working")
this.router.navigateByUrl("/first")
  }

  onInput(event){
    if(this.username.length>3 && this.userPassword.length>3){
      this.DisabledFlag=false;
    }

   
   

  }
}
