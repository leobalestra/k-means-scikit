import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Registrou automaticamente
import { NomeComponenteComponent } from './pasta/nome-componente/nome-componente.component';
import { ServicoService } from './servico.service';

@NgModule({
  declarations: [
    AppComponent,
    NomeComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule //Importando modulos do Angular
  ],
  providers: [
    ServicoService //Importou lá em cima automaticamente
  ],
  bootstrap: [AppComponent] //Quem é o bootstrap AppComponent
})
export class AppModule { }
