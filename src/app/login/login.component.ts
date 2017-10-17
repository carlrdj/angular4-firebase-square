import { Component } from '@angular/core';
import { AutorizacionService } from '../servicios/autorizacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {	
	loginParameter:any={}; 
	constructor(private autorizacionService: AutorizacionService){
		//this.autorizacionService.login('email', 'password');
		//this.autorizacionService.registro('email', 'password');
	}
	login(){
		this.autorizacionService.login(this.loginParameter.email, this.loginParameter.password);
	}
	
  facebookLogin(){
      this.autorizacionService.facebookLogin();
  }
}
