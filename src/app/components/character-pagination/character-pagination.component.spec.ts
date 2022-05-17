import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterPaginationComponent } from './character-pagination.component';

describe('CharacterPaginationComponent', () => {
  let component: CharacterPaginationComponent;
  let fixture: ComponentFixture<CharacterPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
