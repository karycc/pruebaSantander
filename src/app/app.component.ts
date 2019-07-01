import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calidadAire';
  showRegister = false;
  showLogin = true;
  showMain = false;

  changeValue(confirmation){
    console.log("En app componente Login: "+ confirmation.showFormLogin );
    console.log("En app componente conf: "+ confirmation.showFormRegister );
    console.log("En app componente main: "+ confirmation.showMain );
    this.showLogin = confirmation.showFormLogin;
    this.showRegister = confirmation.showFormRegister;
    this.showMain = confirmation.showMain;
    
  }
}
