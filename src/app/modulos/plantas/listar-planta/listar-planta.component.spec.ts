import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPlantaComponent } from './listar-planta.component';

describe('ListarPlantaComponent', () => {
  let component: ListarPlantaComponent;
  let fixture: ComponentFixture<ListarPlantaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPlantaComponent]
    });
    fixture = TestBed.createComponent(ListarPlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
