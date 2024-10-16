import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsactivitiesComponent } from './sportsactivities.component';

describe('SportsactivitiesComponent', () => {
  let component: SportsactivitiesComponent;
  let fixture: ComponentFixture<SportsactivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsactivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportsactivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
