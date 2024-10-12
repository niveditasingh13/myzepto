import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoojaessentialComponent } from './poojaessential.component';

describe('PoojaessentialComponent', () => {
  let component: PoojaessentialComponent;
  let fixture: ComponentFixture<PoojaessentialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoojaessentialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoojaessentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
