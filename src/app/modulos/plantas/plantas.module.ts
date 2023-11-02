import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantasRoutingModule } from './plantas-routing.module';
import { ListarPlantaComponent } from './listar-planta/listar-planta.component';


@NgModule({
  declarations: [
    ListarPlantaComponent
  ],
  imports: [
    CommonModule,
    PlantasRoutingModule
  ]
})
export class PlantasModule { }
