import { Planta } from './planta';
import { faker } from '@faker-js/faker';

describe('Planta', () => {
  it('should create an instance', () => {
    const planta: Planta = new Planta( generarPlantaFake());
    expect(planta).toBeTruthy();
    expect(planta.id).toBeTruthy();
    expect(planta.nombre_comun).toBeTruthy();
    expect(planta.nombre_cientifico).toBeTruthy();
    expect(planta.tipo).toBeTruthy();
    expect(planta.altura_maxima).toBeTruthy();
    expect(planta.clima).toBeTruthy();
    expect(planta.sustrato_siembra).toBeTruthy();
  });
});



let generarPlantaFake = () => {
  return {
    id: faker.number.int(),
    nombre_comun: faker.company.name(),
    nombre_cientifico: faker.person.firstName(),
    tipo: faker.person.lastName(),
    altura_maxima: faker.number.int(),
    clima: faker.company.name(),
    sustrato_siembra: faker.company.name(),
  }
}
