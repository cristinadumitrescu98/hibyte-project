import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergenTableComponent } from './allergen-table.component';

describe('AllergenTableComponent', () => {
  let component: AllergenTableComponent;
  let fixture: ComponentFixture<AllergenTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllergenTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllergenTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
