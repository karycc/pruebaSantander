import { Component, OnInit } from '@angular/core';
import { USERS } from '../user-mock';
import { User } from "../model/user";

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {
  User = new User();
  adminUser:string;
  optionSelect: number;
  users = USERS;
  userFound = false;
  successDeleteUser = false;
  constructor() { }

  ngOnInit() {
  }

  selectOption(option){
    this.optionSelect = option;
  }


  search(){
    let index = 0;
    let indexFound = 0;
    for(let user of this.users){
      
      if(this.User.user == user.user){
        this.userFound = true;
        indexFound = index;
      }
      index++;
    }

    if(this.userFound){
      this.users.splice(indexFound,1);
      this.successDeleteUser = true;
    }
  }

}
