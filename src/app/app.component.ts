import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  

  info: any = {};
  cargada = false;

  constructor( public infoPaginaService: InfoPaginaService){

  }

}
