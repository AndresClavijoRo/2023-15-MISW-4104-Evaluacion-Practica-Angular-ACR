import { Component, OnInit } from '@angular/core';
import { Planta } from 'src/app/modelos/plantas/planta';
import { PlantasService } from 'src/app/servicios/plantas/plantas.service';

@Component({
  selector: 'app-listar-planta',
  templateUrl: './listar-planta.component.html',
  styleUrls: ['./listar-planta.component.css']
})
export class ListarPlantaComponent implements OnInit {
  plantas: Planta[] = [];

  constructor(
    private plantasService: PlantasService
  ) { }

  ngOnInit(): void {
    this.getPlantas();
  }

  getPlantas() {
    this.plantasService.getPlantas().subscribe((plantas) => {
        this.plantas = plantas;
    });
  }


  public get numPLantasInterior() : string {
    return this.plantas.filter(planta => planta.tipo == "Interior").length.toString();
  }

  public get numPLantasExterior() : string {
    return this.plantas.filter(planta => planta.tipo == "Exterior").length.toString();
  }

}
