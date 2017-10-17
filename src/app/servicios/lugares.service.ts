import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database/database";
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LugaresService{

    API_ENDPOINT = 'https://square-db650.firebaseio.com';
    lugares:any = [
        {id: 1, plan: 'pagado', cercania: 1, distancia: 1, activo: true, nombre:'Florería la Gardenia'},
        {id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, activo: true, nombre:'Donas la pasadita'},
        {id: 3, plan: 'gratuito', cercania: 2, distancia: 5, activo: true, nombre:'Veterinaria Huellitas Felices'},
        {id: 4, plan: 'gratuito', cercania: 3, distancia: 10, activo: false, nombre:'Sushi Suhiroll'},
        {id: 5, plan: 'pagado', cercania: 3, distancia: 35, activo: true, nombre:'Hotel la Gracia'},
        {id: 6, plan: 'gratuito', cercania: 3, distancia: 120, activo: false, nombre:'Zapatería el Clavo'},
    ];

    constructor(private afDB: AngularFireDatabase, private http: Http){

    }

    public getLugar(id){
        return this.afDB.object('lugares/' + id);
    }

    public getLugares(){
        //autorizacion en rule
        //return this.afDB.list('lugares');         
        //return this.http.get(this.API_ENDPOINT+'/lugares.json');
        
        return this.http.get(this.API_ENDPOINT+'/.json')
        .map((resultado) => {
           const data = resultado.json().lugares;
           return data;
        });
        
    }
    public buscarLugar(id){
        return this.lugares.filter((lugar) => { return lugar.id == id})[0] || null;
    }
    public guardarLugar(lugar){
        console.log(lugar);
        //this.lugares.push(lugar);
        //this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
        const headers = new Headers({"Content-Type":"application/json"});
        return this.http.post(this.API_ENDPOINT+'/lugares.json', lugar, {headers:headers});
    }

    public editarLugar(lugar){
        this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
    }

    public obtenerGeoData(direccion){
        //http://maps.google.com/maps/api/geocode/xml?address=78-43+diagonal+70f,+Bogota,Colombia
        return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion);
    }
}