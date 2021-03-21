import { Component, OnInit } from '@angular/core';
import {Observable, observable} from 'rxjs';
import {EmployeeService} from "../services/employee.service";
import {Employee} from '../../employee';
import {FormBuilder,Validator, Validators} from '@angular/forms'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  dataSaved:false;
  employeeform:any;
  allEmployees:Observable<Employee[]>;



  constructor( private formbuilder:FormBuilder,private employeeservice:EmployeeService) { }

  ngOnInit() {
    this.employeeform=this.formbuilder.group({
      EmpId:['',[Validators.required]]
    });
    this.loadAllEmployee();
  }
  loadAllEmployee(){
    this.allEmployees=this.employeeservice.getAllEmployee();
  }

}
