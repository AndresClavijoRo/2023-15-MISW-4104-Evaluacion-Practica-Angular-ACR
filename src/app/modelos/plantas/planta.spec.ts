import { Planta } from './planta';
import { faker } from '@faker-js/faker';

describe('Planta', () => {
  it('should create an instance', () => {
    const planta: Planta = new Planta({
      id: 1,
      nombre_comun: 'Planta común',
      nombre_cientifico: 'Planta científica',
      tipo: 'Tipo de planta',
      altura_maxima: 10,
      clima: 'Clima de la planta',
      sustrato_siembra: 'Sustrato de la planta'
    });
    expect(planta).toBeTruthy();
    expect(planta.id).toEqual(1);
    expect(planta.nombre_comun).toEqual('Planta común');
    expect(planta.nombre_cientifico).toEqual('Planta científica');
    expect(planta.tipo).toEqual('Tipo de planta');
    expect(planta.altura_maxima).toEqual(10);
    expect(planta.clima).toEqual('Clima de la planta');
    expect(planta.sustrato_siembra).toEqual('Sustrato de la planta');
  });
});



let generarPlantaFake = () => {
  return {
    id: faker.datatype.number(),
    nombre_comun: faker.name.firstName(),
    nombre_cientifico: faker.name.lastName(),
    tipo: faker.name.jobTitle(),
    altura_maxima: faker.datatype.number(),
    clima: faker.name.jobArea(),
    sustrato_siembra: faker.name.jobDescriptor()
  }
}
