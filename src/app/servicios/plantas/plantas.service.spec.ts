import { TestBed } from '@angular/core/testing';

import { PlantasService } from './plantas.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PlantasService', () => {
  let service: PlantasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PlantasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
