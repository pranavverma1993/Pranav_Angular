import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../Shared/Services/myservice.service';
import { Router } from '@angular/router';
import { FetchDataService } from '../Shared/Services/fetch-data.service';
import { GetEmployeeDetails, GetEmployeeDetailsOP } from '../Shared/employee';
import { AuthService } from '../Shared/Auth/auth.service';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent implements OnInit {

  constructor(public service : MyserviceService,private FetchDataService : FetchDataService,private authService : AuthService) { }
  getEmployeeDetailsOPList = new Array<GetEmployeeDetailsOP>();
  getEmployeeDetails = new GetEmployeeDetails();
  searchText:any;

  test="pranav";
  
  ngOnInit(): void {
  }

  FetchAllData(){
    this.FetchDataService.fetchAllUserMethod().subscribe(
      data => {
         console.log("data from get" + data)
        if (data.responseCode === 0) {
           this.getEmployeeDetailsOPList = data.response;
           console.log(this.getEmployeeDetailsOPList + "PV")
      // this.getEmployeeDetails.userId = null;
         }
        },
         error => console.error(error)
)
  }

  logout(){
this.authService.logout();
  }

}
