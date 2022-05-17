import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseLabelComponent } from './house-label.component';

describe('HouseLabelComponent', () => {
  let component: HouseLabelComponent;
  let fixture: ComponentFixture<HouseLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
