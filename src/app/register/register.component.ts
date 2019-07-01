import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from "../model/user";
import { USERS } from '../user-mock';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userReg = new User();
  users = USERS;
  successRegister = false;

  @Output() showLogin = new EventEmitter<{showFormLogin: boolean, showFormRegister: boolean, showMain: boolean}>();
  constructor() { }

  ngOnInit() {

  }

  addUser(){
    console.log(this.users)
    console.log(this.userReg.user);
    this.users.push({ 
      user: this.userReg.user, 
      password: this.userReg.password, 
      name: this.userReg.name, 
      lastName: this.userReg.lastName, 
      email: this.userReg.email, 
      birthdate: this.userReg.birthdate , 
      profile: this.userReg.profile
    });
    console.log("----------------------------");
    console.log(this.users)
    this.successRegister = true;
  }

  login(){
    this.showLogin.emit({showFormLogin: true, showFormRegister: false, showMain: false})
  }

  

}
