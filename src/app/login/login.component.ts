import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { USERS } from '../user-mock';
import { User } from "../model/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin = new User();
  users = USERS;
  loginSuccess = false;
  showLogin = true;
  showFormRegister = false;
  showMain = false;
  showButtonRegister = false;

  @Output() showRegister = new EventEmitter<{showFormLogin: boolean, showFormRegister: boolean, showMain: boolean}>();
  constructor() { }

  ngOnInit() {
  }

  login(){
    console.log("user: "+ this.userLogin.user);
    console.log("pass: "+ this.userLogin.password);
    console.log(this.userLogin);
    var successUser = false;

    for(let user of this.users){
      if(this.userLogin.user == user.user){
        this.userLogin.profile = user.profile;
        successUser = true;
      }
    }
    console.log("Existe el usuario: " +successUser);
    if(!successUser){
      this.loginSuccess = true;
      this.showButtonRegister = true;
    }else{
      
      this.showRegister.emit({showFormLogin: false, showFormRegister: false, showMain: true})
      localStorage.setItem('user', JSON.stringify(this.userLogin.user));
      localStorage.setItem('profile', JSON.stringify(this.userLogin.profile));
    }
    
  }

  register(){
    this.showRegister.emit({showFormLogin: false, showFormRegister: true, showMain: false})
  }

}
