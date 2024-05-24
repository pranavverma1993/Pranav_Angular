
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteEmployeeDetails, GetEmployeeDetails, SaveEmployeeDetails, UpdateEmployeeDetails } from '../employee';
@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private https: HttpClient) {}

  httpOptions={
    headers: new HttpHeaders({
      'content-Type' : 'application/json'}
    ),
    
  };

  dataUrl='assets/Birds.json';
  dataUrl1='assets/countries.json';
  dataUrl2='http://localhost:8080/saveUserData';
  dataUrl23='http://localhost:8080/fetchUserData';
  dataUrlDel='http://localhost:8080/deleteUserData';
  dataUrlUpdate='http://localhost:8080/updateUserData';
  fetchAllUser='http://localhost:8080/fetchAllUserData';

  fetchAllUserMethod() : Observable<any>{
    return this.https.get(this.fetchAllUser,this.httpOptions);
  }

  fetchCountry() : Observable<any>{
    return this.https.get(this.dataUrl1,this.httpOptions);
  }

  saveEmployee(saveEmployeeDetails : SaveEmployeeDetails) : Observable<any>{
     console.log(saveEmployeeDetails)
    return this.https.post(this.dataUrl2,saveEmployeeDetails,this.httpOptions);
  }

  fetchEmployee(getEmployeeDetails : GetEmployeeDetails) : Observable<any>{
    return this.https.post(this.dataUrl23,getEmployeeDetails,this.httpOptions);
  }
 
  deleteEmployee(deleteEmployeeDetails : DeleteEmployeeDetails) : Observable<any>{
    return this.https.post(this.dataUrlDel,deleteEmployeeDetails,this.httpOptions);
  }
  
  updateEmployee(updateEmployeeDetails : UpdateEmployeeDetails) : Observable<any>{
    
    return this.https.post(this.dataUrlUpdate,updateEmployeeDetails,this.httpOptions);
  }
}
