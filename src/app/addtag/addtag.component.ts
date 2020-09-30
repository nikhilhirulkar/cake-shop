import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddtagService } from './addtag.service'

@Component({
  selector: 'app-addtag',
  templateUrl: './addtag.component.html',
  styleUrls: ['./addtag.component.css']
})
export class AddtagComponent implements OnInit {
  columns=[];
  index=[];
  addTag:[];
  constructor(
    private router:Router,
    private addtagservice:AddtagService
  ) { }

  ngOnInit(): void {
    this.getAddTag();
  }

  getAddTag(){
      this.addtagservice.getTag().subscribe((result) =>{
      this.addTag=result;
      console.log(this.addTag,"result")
  });
    
     }
}
