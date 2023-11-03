import { TestBed } from '@angular/core/testing';

import { PlantasService } from './plantas.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Planta } from 'src/app/modelos/plantas/planta';
import { faker } from '@faker-js/faker';
import { environment } from 'src/environments/environment';

describe('PlantasService', () => {
  let service: PlantasService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlantasService]
    });
    service = TestBed.inject(PlantasService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data to external service', () => {
    const dummyPlants: Planta[] = [generarPlantaFake(), generarPlantaFake(), generarPlantaFake()];
    service.getPlantas().subscribe(data => {
      expect(data.length).toBe(3);
      expect(data).toEqual(dummyPlants);
    });
    const request = httpMock.expectOne(`${environment.baseUrl}`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyPlants);
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
