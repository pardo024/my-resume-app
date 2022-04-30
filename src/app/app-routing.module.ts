import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './components/cv/cv.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {
    path:'cv',component:CvComponent
  },
  {
    path:'formulario',component:FormularioComponent
  },
  {
    path:'**',component:FormularioComponent
  }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
