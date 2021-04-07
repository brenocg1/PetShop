import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingsScreenComponent } from './housings-screen.component';

describe('HousingsScreenComponent', () => {
  let component: HousingsScreenComponent;
  let fixture: ComponentFixture<HousingsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousingsScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousingsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
