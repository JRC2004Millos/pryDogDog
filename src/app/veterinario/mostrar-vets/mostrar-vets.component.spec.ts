import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarVetsComponent } from './mostrar-vets.component';

describe('MostrarVetsComponent', () => {
  let component: MostrarVetsComponent;
  let fixture: ComponentFixture<MostrarVetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarVetsComponent]
    });
    fixture = TestBed.createComponent(MostrarVetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
