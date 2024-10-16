import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTratamientoComponent } from './add-tratamiento.component';

describe('AddTratamientoComponent', () => {
  let component: AddTratamientoComponent;
  let fixture: ComponentFixture<AddTratamientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTratamientoComponent]
    });
    fixture = TestBed.createComponent(AddTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
