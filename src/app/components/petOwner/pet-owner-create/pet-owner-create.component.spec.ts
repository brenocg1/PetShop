import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetOwnerCreateComponent } from './pet-owner-create.component';

describe('PetOwnerCreateComponent', () => {
  let component: PetOwnerCreateComponent;
  let fixture: ComponentFixture<PetOwnerCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetOwnerCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetOwnerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
