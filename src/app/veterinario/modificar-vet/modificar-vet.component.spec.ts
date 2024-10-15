import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarVetComponent } from './modificar-vet.component';

describe('ModificarVetComponent', () => {
  let component: ModificarVetComponent;
  let fixture: ComponentFixture<ModificarVetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificarVetComponent]
    });
    fixture = TestBed.createComponent(ModificarVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
