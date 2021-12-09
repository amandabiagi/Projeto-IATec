import { CarrosComponent } from './carros/carros.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormEditarComponent } from './formEditar/formEditar.component';

const routes: Routes = [
  {path: '', component: CarrosComponent},
  {path: 'form', component: FormComponent},
  {path: 'form/editar/:id', component: FormEditarComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrosRoutingModule { }
