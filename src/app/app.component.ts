import { Component } from '@angular/core';
import { AutorizacionService } from "./servicios/autorizacion.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Square';
	lugares:any = [
		{plan: 'pagado',cercania: 1, distancia: 1,activo: true, nombre: 'Floreria La Gardenia'},
		{plan: 'gratuido',cercania: 2, distancia: 1.8,activo: false, nombre: 'Donas La Pasadita'},
		{plan: 'pagado',cercania: 3, distancia: 5,activo: true, nombre: 'Veterinaria Huellitas felices'}
	];
	lat:number = -11.961890;
	lng:number = -77.094120; 
	personas:any = [
      {nombre:'Pedro Colina', edad:15},
      {nombre:'Maria García', edad:25},
      {nombre:'Jose Fernández', edad:22},
      {nombre:'Ana Lopez', edad:12}
  ];


  loggedIn = false;
  loggedUser:any = null;
  constructor(private autorizacionService:AutorizacionService){
    this.autorizacionService.isLogged()
        .subscribe((result)=>{
          if(result && result.uid){
            this.loggedIn = true;
            //this.loggedUser = this.autorizacionService.getUser();            
            setTimeout(()=>{
                this.loggedUser = this.autorizacionService.getUser().currentUser.email;
            }, 500);
          }else{
            this.loggedIn = false;
          }
        }, (error)=>{
          this.loggedIn = false;
        })


  }

  logout(){
    this.autorizacionService.logout();
  }
}
