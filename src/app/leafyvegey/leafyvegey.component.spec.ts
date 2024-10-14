import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafyvegeyComponent } from './leafyvegey.component';

describe('LeafyvegeyComponent', () => {
  let component: LeafyvegeyComponent;
  let fixture: ComponentFixture<LeafyvegeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeafyvegeyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeafyvegeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
