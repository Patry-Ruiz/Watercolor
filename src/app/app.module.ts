import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { PieDePaginaComponent } from './pie-de-pagina/pie-de-pagina.component';
import { RedesComponent } from './redes/redes.component';
import { PortadaComponent } from './portada/portada.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    ContenidoComponent,
    PieDePaginaComponent,
    RedesComponent,
    PortadaComponent,
    PortafolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
