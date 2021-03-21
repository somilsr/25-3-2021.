import { Component, OnInit } from '@angular/core';
import { SelectBusService } from '../services/selectBus.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Journey_Route } from '../models/route.model';

import {FormBuilder,Validator} from '@angular/forms'
import {observable} from 'rxjs'


@Component({
  selector: '.select-bus',
  templateUrl: './select-bus.component.html',
  styleUrls: ['./select-bus.component.css']
})
export class SelectBusComponent implements OnInit {
// ={
//   1109001:'comilla',
//   1109002:'Chittagong',
//   1109003:'Sylet',
//   1109004:'Barisal'
// }

pnumber=1;

place:Place[]=[];

  constructor(
    private BusService:SelectBusService,
    private router:Router
  ) {
   this.place[0]=new Place()
   }

  ngOnInit() {
 
  }

  

  ValidateEmp(lbl, val) {
    let empId=123;
    
    if (val==empId){
      document.getElementById(lbl).innerHTML = "welcome Mr."+val;
      
    }
    else{
      document.getElementById(lbl).innerHTML = "invalid input";

    }
  } 



  SearchBus(form: NgForm) {
    let leaving_form = form.value.leaving_form;
    let destination;
   
  
    this.place.filter(iteam=>{
      if(iteam.key==form.value.going_to){
        destination=iteam.value
      }
    })

    let date = form.value.depart_date;
    let route:Journey_Route = {
      leaving_form: leaving_form,
      going_to: destination,
      date:date
    }
    localStorage.setItem("route", JSON.stringify(route))
    let routeId = form.value.going_to;
    this.BusService.getRoueId(routeId);
    this.router.navigate(['search']);
  }

  leave(e){
 
    let leavingfrom=e.target.value;
    console.log(leavingfrom)
    if(leavingfrom=='dhaka'){
      this.place= [
        // {key:'1109001', value:'3pm'} ,
        // {key:'1109002', value:'6pm'} ,
        // // {key:'1109004', value:'KuaKata'} ,
        // // {key:'1109005', value:'Coxs Bazar'},
        // // {key:'1109006', value:'Rajshahi'} ,
        // {key:'1109002', value:'9pm'}, 
        // {key:'1109003', value:'12pm'} ,
        // {key:'1109004', value:'10pm'}



        {key:'1109001', value:'1'},
        {key:'1109002', value:'2'},
        {key:'1109003', value:'3'},
        {key:'1109004', value:'4'},
        {key:'1109005', value:'5'},
        {key:'1109006', value:'6'},
        {key:'1109007', value:'7'},
        {key:'1109008', value:'8'},
        {key:'1109009', value:'9'},
        {key:'1109010', value:'10'},
        {key:'1109011', value:'11'},
        {key:'1109012', value:'12'},
        {key:'1109013', value:'13'},
        {key:'1109014', value:'14'},
        {key:'1109015', value:'15'},
        {key:'1109016', value:'16'},
        {key:'1109017', value:'17'},
        {key:'1109018', value:'18'},
        {key:'1109019', value:'19'},
        {key:'1109020', value:'20'},
        {key:'1109021', value:'21'},
        {key:'1109022', value:'22'},
        {key:'1109023', value:'23'},
        {key:'1109024', value:'24'}
      ]
  }
  else if(leavingfrom=='7pm'){
    this.place= [
      {key:'2209002', value:'Chittagong'} ,
      {key:'2209001', value:'Dhaka'} ,
      {key:'2209003', value:'Rajshahi'} ,
     

    ]
  }
  else if(leavingfrom=='6pm'){
    this.place= [
      {key:'3309003', value:'Mymensingh'} ,
      {key:'3309001', value:'Dhaka'} ,
      {key:'3309002', value:'Sylet'} ,
   
    ]
  }

}



// validateForm() {
//   if (this.myformGroup.invalid) {
//     this.myformGroup.get('id').markAsTouched();
//     this.myformGroup.get('validate ').markAsTouched();
//     return;
//   }
//   // do something else
// }


}
export class Place {
  key:string;
  value:string;
}