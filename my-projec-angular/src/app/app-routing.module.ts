import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];
//Define as rotas

@NgModule({
  imports: [RouterModule.forRoot(routes)], //importando os módulos
  exports: [RouterModule] //Exportando para o app.module possa utilizar
})
export class AppRoutingModule { }
