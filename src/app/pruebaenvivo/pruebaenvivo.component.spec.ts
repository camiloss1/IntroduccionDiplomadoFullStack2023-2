import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaenvivoComponent } from './pruebaenvivo.component';

describe('PruebaenvivoComponent', () => {
  let component: PruebaenvivoComponent;
  let fixture: ComponentFixture<PruebaenvivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebaenvivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PruebaenvivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
