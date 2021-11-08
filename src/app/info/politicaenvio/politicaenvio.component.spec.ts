import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaenvioComponent } from './politicaenvio.component';

describe('PoliticaenvioComponent', () => {
  let component: PoliticaenvioComponent;
  let fixture: ComponentFixture<PoliticaenvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticaenvioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticaenvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
