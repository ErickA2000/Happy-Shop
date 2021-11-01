import {NgModule} from '@angular/core';

import { RouterModule, Routes } from "@angular/router";
import { CuentaComponent } from './cuenta/cuenta.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './productos/productos.component';
import { RegistroComponent } from './registro/registro.component';

const app_routes: Routes = [
    { path: 'inicio', component: InicioComponent},
    { path: 'productos', component: ProductosComponent},
    { path: 'cuenta', component: CuentaComponent},
    { path: 'login', component: LoginComponent},
    { path: 'registro', component: RegistroComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
]

@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, {useHash: true})
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}