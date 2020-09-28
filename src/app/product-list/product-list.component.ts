import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  ProductListService} from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 
  columns=["Title","Category","Price","Action"];
  index=["title","category","price"];
  productData:[];

  constructor(
     private router:Router,
     private productlistservice: ProductListService
  ) { }

  ngOnInit(): void {
    this.getProductData();
  }

 getProductData(){
    this.productlistservice.getProduct().subscribe((result) =>{
      this.productData=result;
  });
 }
}