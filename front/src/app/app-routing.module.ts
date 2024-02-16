import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './components/listar/listar.component';
import { GuardarComponent } from './components/guardar/guardar.component';

const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'guardar', component:GuardarComponent},
  {path:'**', redirectTo:'listar'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
