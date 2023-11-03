import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ListarPlantaComponent } from './modulos/plantas/listar-planta/listar-planta.component';
import { PlantasService } from './servicios/plantas/plantas.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, HttpClientTestingModule],
    declarations: [AppComponent, ListarPlantaComponent],
    providers: [PlantasService]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
