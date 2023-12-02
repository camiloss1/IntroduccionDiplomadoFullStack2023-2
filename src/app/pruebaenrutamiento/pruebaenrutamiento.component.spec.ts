import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaenrutamientoComponent } from './pruebaenrutamiento.component';

describe('PruebaenrutamientoComponent', () => {
  let component: PruebaenrutamientoComponent;
  let fixture: ComponentFixture<PruebaenrutamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebaenrutamientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PruebaenrutamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
