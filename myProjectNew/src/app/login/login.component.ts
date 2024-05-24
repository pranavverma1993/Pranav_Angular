import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Shared/Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router,private authService : AuthService) { }

  ngOnInit(): void {
   console.log("pranac")
  }

  username:string=""; //pra
  passwordVar:string="";
  DisabledFlag:boolean=true;
  MyDisabledFlag: boolean=false;
  showerror:boolean=false;


 
  onInput(){
if(this.username.length>3 && this.passwordVar.length>3){
  this.DisabledFlag=false;
}
  }

submitData(username: string, passwordVar : string){

  var output = this.authService.login(username, passwordVar);
  console.log("output" + output)
  if(output == true)
  {
    this.router.navigateByUrl("/fetch");
  }
  else{
    this.showerror=true;
   }
  }

  helloButton(){
    this.router.navigateByUrl("sharedM/pranav");
  }
}
