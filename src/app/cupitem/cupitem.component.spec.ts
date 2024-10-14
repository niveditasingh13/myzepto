import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CupitemComponent } from './cupitem.component';

describe('CupitemComponent', () => {
  let component: CupitemComponent;
  let fixture: ComponentFixture<CupitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CupitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CupitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
