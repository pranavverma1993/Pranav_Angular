import { Component, OnInit } from '@angular/core';
import { DeleteEmployeeDetails, GetEmployeeDetails, GetEmployeeDetailsOP, SaveEmployeeDetails, UpdateEmployeeDetails } from '../Shared/employee';
import { FetchDataService } from '../Shared/Services/fetch-data.service';
import { Router } from '@angular/router';
import { MyserviceService } from '../Shared/Services/myservice.service';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(public service : MyserviceService,private router : Router,private FetchDataService : FetchDataService) { }
  
  saveEmployeeDetails=new SaveEmployeeDetails();
  updateEmployeeDetails=new UpdateEmployeeDetails();
  getEmployeeDetails = new GetEmployeeDetails();
  deleteEmployeeDetails = new DeleteEmployeeDetails();
  firstName : String;
  lastName : String;
  userId:Number;
  getEmployeeDetailsOPList = new Array<GetEmployeeDetailsOP>();
  showData:Boolean=false;
  
  
 
  jsonArray = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];

  ngOnInit(): void {
    
  }

 
  saveEmployee(){
    
    this.service.saveEmployee(this.saveEmployeeDetails).subscribe(
      data => {
        console.log("data of saving" + data)
        if (data.responseCode === 0) {
          alert("saved success");
          // this.saveEmployeeDetails.firstName=" ";
          // this.saveEmployeeDetails.lastName=" ";
          // this.saveEmployeeDetails.userId=null;
        }
        },
         error => console.error(error)
)

  }
 

  getEmployee(){
    this.service.fetchEmployee(this.getEmployeeDetails).subscribe(
      data => {
         console.log("data from get" + data)
        if (data.responseCode === 0) {
           this.getEmployeeDetailsOPList = data.response;
           console.log(this.getEmployeeDetailsOPList + "PV")
      this.getEmployeeDetails.userId = null;
         }
        },
         error => console.error(error)
)
  }


  deleteEmployee(){
    this.service.deleteEmployee(this.deleteEmployeeDetails).subscribe(
      data => {
        console.log("data" + data)
        if (data.responseCode === 0) {
          alert("deleted")
          // this.deleteEmployeeDetails.userId=null;
        }
        },
         error => console.error(error)
)


  }

  updateEmployee(){
    this.service.updateEmployee(this.updateEmployeeDetails).subscribe(
      data => {
        console.log("data" + data)
        if (data.responseCode === 0) {
          alert("updated")
        }
        this.updateEmployeeDetails.firstName="";
        this.updateEmployeeDetails.lastName="";
        this.updateEmployeeDetails.userId=null;
        },
         error => console.error(error)
)
  }

  FetchAllData(){
    this.FetchDataService.fetchAllUserMethod().subscribe(
      data => {
         console.log("data from get" + data)
        if (data.responseCode === 0) {
           this.getEmployeeDetailsOPList = data.response;
           console.log(this.getEmployeeDetailsOPList + "PV")
      this.getEmployeeDetails.userId = null;
         }
        },
         error => console.error(error)
)
  }

}
