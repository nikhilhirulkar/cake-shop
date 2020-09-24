import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
}
)
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(
    private router: Router,
    private loginService : LoginService,
    )
    {}
    ngOnInit(): void {

  }

  login(){

    console.log(this.username, this.password);
    if((this.username && this.password)){
      this.loginService.loginUser(this.username, this.password).subscribe((result) =>{
        console.log(result);
        if(result){
          // localStorage.setItem('token', result.data.token);
          // this.message = result.validation;         //display valdation msg
          this.router.navigateByUrl("/home");           //got to home page after login success

        }else{
          // this.message = result.validation;     //display valdation msg
        }
      })

    }
    // setTimeout(() => {
    //   if((this.username && this.username == 'anurag') && (this.password && this.password == 'random321')){
    //     this.message = 'Loged in successfully'
    //     this.presentToast();      //display toast msg
    //     this.router.navigate(['home']);
    //   }
    //   else this.message = 'Please enter valid username & passsword';
    //   this.isLoading.dismiss();
    //   this.presentToast();

    // }, 1000);
  }

  jumpToHome(){
    this.router.navigateByUrl('/home');
    // console.log("homee")
  }

}
