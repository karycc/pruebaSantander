import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from "../model/user";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user:String;
  profile:String;
  showAdmin = false;
  @Output() showLogin = new EventEmitter<{showFormLogin: boolean, showFormRegister: boolean, showMain: boolean}>();
  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.profile = JSON.parse(localStorage.getItem('profile'));
    if(this.profile == "admin")
      this.showAdmin = true;
    console.log("en componente main: "+ this.user);
    console.log("en componente main: "+ this.profile);
  }

  logout(){
    localStorage.removeItem('user');
    localStorage.removeItem('profile');
    this.user = "";
    this.profile = ""
    this.showLogin.emit({showFormLogin: true, showFormRegister: false, showMain: false})
  }
  

}
