import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ApiService]
    });

    service = TestBed.inject(ApiService);
  });
  
  it('should return base URL', () => {
    expect(service.getBaseUrl()).toBe('http://localhost:8000');
  });
});