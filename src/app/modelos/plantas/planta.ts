
export interface PlantaI {
  id: number;
  nombre_comun: string;
  nombre_cientifico: string;
  tipo: string;
  altura_maxima: number;
  clima: string;
  sustrato_siembra: string;
}


export class Planta {
  id: number;
  nombre_comun: string;
  nombre_cientifico: string;
  tipo: string;
  altura_maxima: number;
  clima: string;
  sustrato_siembra: string;
  constructor(planta: PlantaI) {
    this.id = planta.id;
    this.nombre_comun = planta.nombre_comun;
    this.nombre_cientifico = planta.nombre_cientifico;
    this.tipo = planta.tipo;
    this.altura_maxima = planta.altura_maxima;
    this.clima = planta.clima;
    this.sustrato_siembra = planta.sustrato_siembra;
  }
}
