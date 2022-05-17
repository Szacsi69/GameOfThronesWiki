import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousePaginationComponent } from './house-pagination.component';

describe('HousePaginationComponent', () => {
  let component: HousePaginationComponent;
  let fixture: ComponentFixture<HousePaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousePaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
