import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
}
)
export class LoginComponent implements OnInit {
 
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  jumpToHome(){
    this.router.navigateByUrl('/home');
    console.log("homee")
  }

}
