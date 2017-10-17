import { Component } from '@angular/core';
import { LugaresService } from '../servicios/lugares.service';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  animations: [
    trigger('contenedorAnimable', [
        state('inicial', style({
          opacity:0,
          backgroundColor: 'green',
          transform: 'rotate3d(0,0,0,0deg)'
        })),
        state('final', style({
          opacity:1,
          backgroundColor: 'yellow',
          transform: 'rotate3d(5,10,20,10deg)'
        })),
        transition('inicial => final', animate(2000)),
        transition('final => inicial', animate(500))
      ])
  ]
})
export class LugaresComponent {
	title = 'Square';
  state = 'inicial';
  msgError = '';
	lat:number = -11.961890;
	lng:number = -77.094120; 
	lugares = null;

  animar(){
    this.state = (this.state == 'final') ? 'inicial' : 'final';
  }
  animacionInicial(e){
    console.log('iniciado');
    console.log(e);
  }
  animacionTermina(e){
    console.log('terminado');
    console.log(e);
  }
  constructor(private lugaresService: LugaresService){

  	//this.lugares = lugaresService.getLugares();
    //autorizacion en rule
  	/*
    lugaresService.getLugares().valueChanges().subscribe((lugares) => {
  		this.lugares = lugares;
  	});
    */
    /*
    lugaresService.getLugares()
    .subscribe((lugares) => {
      this.lugares = lugares.json();
      var me = this;
      me.lugares = Object.keys(me.lugares).map(function (key) { return me.lugares[key]; });      
    });
    */
    lugaresService.getLugares()
    .subscribe((lugares) => {
      this.lugares = lugares;
      var me = this;
      me.lugares = Object.keys(me.lugares).map(function (key) { return me.lugares[key]; }); 
      this.state='final';     
    }, error => {
      console.log(error);
      this.msgError = error.statusText;
      //alert('Tenemos algo de dificultades, Error: ' + error.statusText)
    });

  }
}
