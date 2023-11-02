import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPlantaComponent } from './listar-planta/listar-planta.component';

const routes: Routes = [
  { path: 'lista-plantas', component: ListarPlantaComponent },
  { path: '**', redirectTo:'lista-plantas' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantasRoutingModule { }
