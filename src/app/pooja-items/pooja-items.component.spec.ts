import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoojaItemsComponent } from './pooja-items.component';

describe('PoojaItemsComponent', () => {
  let component: PoojaItemsComponent;
  let fixture: ComponentFixture<PoojaItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoojaItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoojaItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
