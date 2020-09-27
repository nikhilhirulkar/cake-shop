import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AddProductService} from './add-product.service'
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.sass','./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  columns=["id","employee_name","employee_salary","employee_age","profile_image"];
  index=["id","employee_name","employee_salary","employee_age","profile_image"];
userData:[];
  constructor(
    private router:Router,
    private addproductservice:AddProductService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

 getData(){

    console.log("this.username, this.password");
    this.addproductservice.getUserDetails().subscribe((result) =>{
      this.userData=result.data;
      console.log(this.userData,"result")
  });
    
     }
   
  }

