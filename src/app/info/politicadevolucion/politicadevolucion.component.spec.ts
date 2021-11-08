import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticadevolucionComponent } from './politicadevolucion.component';

describe('PoliticadevolucionComponent', () => {
  let component: PoliticadevolucionComponent;
  let fixture: ComponentFixture<PoliticadevolucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticadevolucionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticadevolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
