import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../servicios/lugares.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {
	id = null;
	action2 = '';
	action3 = '';
	
	lugar:any = {};
	constructor(private route: ActivatedRoute, private lugaresService: LugaresService){
			console.log(this.route.snapshot.params['id']);
			this.id=this.route.snapshot.params['id'];
			this.action2 = this.route.snapshot.queryParams['action2'];
			this.action3 = this.route.snapshot.queryParams['action3'];

			this.lugar = this.lugaresService.buscarLugar(this.id);


	}

}
