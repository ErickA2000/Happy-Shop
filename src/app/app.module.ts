import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//rutas
import { AppRoutingModule } from './app-routing.module';

//componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { NosotrosComponent } from './info/nosotros/nosotros.component';
import { PrivacidadComponent } from './info/privacidad/privacidad.component';
import { TerminosComponent } from './info/terminos/terminos.component';
import { PoliticaComponent } from './info/politicapago/politica.component';
import { PoliticaenvioComponent } from './info/politicaenvio/politicaenvio.component';
import { PoliticadevolucionComponent } from './info/politicadevolucion/politicadevolucion.component';
import { PoliticapagoComponent } from './ng g c info/politicapago/politicapago.component';
import { PagoComponent } from './ng g c info/pago/pago.component';
import { PagosComponent } from './ng g c info/pagos/pagos.component';
import { PagopComponent } from './ng g c info/pagop/pagop.component';
import { PoliticapagosComponent } from './ng g c info/politicapagos/politicapagos.component';
import { PrivapagoComponent } from './ng g c info/privapago/privapago.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ProductosComponent,
    LoginComponent,
    RegistroComponent,
    CuentaComponent,
    NosotrosComponent,
    PrivacidadComponent,
    TerminosComponent,
    PoliticaComponent,
    PoliticaenvioComponent,
    PoliticadevolucionComponent,
    PoliticapagoComponent,
    PagoComponent,
    PagosComponent,
    PagopComponent,
    PoliticapagosComponent,
    PrivapagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
