import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVetComponent } from './add-vet.component';

describe('AddVetComponent', () => {
  let component: AddVetComponent;
  let fixture: ComponentFixture<AddVetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddVetComponent]
    });
    fixture = TestBed.createComponent(AddVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
