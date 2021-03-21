import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Employee} from '../../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  ApiUrl="https://localhost:44332/api/employees"
  constructor(private http:HttpClient) { }
  
  getAllEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.ApiUrl+"/"+"allemployees");
  }
  getEmployeeById(Employeeid:string):Observable<Employee>{
    return this.http.get<Employee>(this.ApiUrl+"/"+"employee?id="+document.getElementById("EmpID"));
  }

  // createEmployee(employee:Employee):Observable<Employee>{
  //   let httpHeaders=new HttpHeaders()
  //   .set('Content-Type','application/JSON');
  //   let option={
  //     Headers:httpHeaders
  //   };
  //   return this.http.post<Employee>(this.getAllEmployee.options);
  // }
}
