import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPlantaComponent } from './listar-planta.component';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';
import { Planta } from 'src/app/modelos/plantas/planta';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ListarPlantaComponent', () => {
  let component: ListarPlantaComponent;
  let fixture: ComponentFixture<ListarPlantaComponent>;
  let debug: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ListarPlantaComponent]
    });
    fixture = TestBed.createComponent(ListarPlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPlantaComponent);
    component = fixture.componentInstance;
    const plantas:Planta[] = [];

    for (let i = 0; i < 3; i++) {
      const plantaFake = new Planta(generarPlantaFake());
      plantas.push(plantaFake);
    }
    component.plantas = plantas;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 <tr> elements', () => {
    let queryElements = debug.queryAll(By.css('tbody tr'));
    expect(queryElements.length).toEqual(3);
  });

  it('should have table header', () => {
    let queryElements = debug.queryAll(By.css('thead tr'));
    expect(queryElements.length).toEqual(1);
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
