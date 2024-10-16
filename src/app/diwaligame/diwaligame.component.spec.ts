import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiwaligameComponent } from './diwaligame.component';

describe('DiwaligameComponent', () => {
  let component: DiwaligameComponent;
  let fixture: ComponentFixture<DiwaligameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiwaligameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiwaligameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
