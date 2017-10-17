import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';

import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive'
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './servicios/lugares.service';
import { AutorizacionService } from './servicios/autorizacion.service';
import { MyGuard } from './servicios/my-guard.service';


import { CrearComponent } from './crear/crear.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

import { LinkifystrPipe } from './pipes/linkifystr.pipe';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

const appRoutes: Routes = [
	{path: '', component: LugaresComponent},
  {path: 'lugares', component: LugaresComponent},
	{path: 'contacto', component: ContactoComponent},
	{path: 'detalle/:id', component: DetalleComponent},
  {path: 'crear/:id', component: CrearComponent, canActivate:[MyGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent}
];
export const firebaseConfig = {
  apiKey: "AIzaSyA_OozF14_kG0AbTnRH9BRoSWgBUUA1QQs",
  authDomain: "square-db650.firebaseapp.com",
  databaseURL: "https://square-db650.firebaseio.com",
  storageBucket: "",
  messagingSenderId: '241608957178'
};


@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    LugaresComponent,
    DetalleComponent,
    ContactoComponent,
    CrearComponent,
    LoginComponent,
    RegistroComponent,
    LinkifystrPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCdce_eEX_epBFrgeGF91Cx8dYbtebaCHI'
    }),
    RouterModule.forRoot(appRoutes),    
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
  ],
  providers: [LugaresService, AutorizacionService, MyGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
