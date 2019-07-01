import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from "./consulta/consulta.component"
import { WelcomeComponent } from "./welcome/welcome.component";
import { AdministracionComponent } from "./administracion/administracion.component"

const routes: Routes = [
  { path: 'listado', component: ConsultaComponent },
  { path: 'inicio', component: WelcomeComponent },
  { path: 'administracion', component: AdministracionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
