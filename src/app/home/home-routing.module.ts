import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
  path:'',
  component: HomeComponent,
  children: [
    {
      path: '',
      component:LoginComponent,
    },
    {
      path:"novousuario",
      component: NovoUsuarioComponent,
    }
  ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
