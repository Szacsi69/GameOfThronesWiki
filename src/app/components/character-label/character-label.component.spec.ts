import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterLabelComponent } from './character-label.component';

describe('CharacterLabelComponent', () => {
  let component: CharacterLabelComponent;
  let fixture: ComponentFixture<CharacterLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
