import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsveggiComponent } from './fruitsveggi.component';

describe('FruitsveggiComponent', () => {
  let component: FruitsveggiComponent;
  let fixture: ComponentFixture<FruitsveggiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitsveggiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitsveggiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
