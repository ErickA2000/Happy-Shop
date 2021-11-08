import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivapagoComponent } from './privapago.component';

describe('PrivapagoComponent', () => {
  let component: PrivapagoComponent;
  let fixture: ComponentFixture<PrivapagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivapagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivapagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
