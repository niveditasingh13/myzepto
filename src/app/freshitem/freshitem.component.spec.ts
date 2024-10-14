import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshitemComponent } from './freshitem.component';

describe('FreshitemComponent', () => {
  let component: FreshitemComponent;
  let fixture: ComponentFixture<FreshitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreshitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreshitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
