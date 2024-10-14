import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftitemComponent } from './giftitem.component';

describe('GiftitemComponent', () => {
  let component: GiftitemComponent;
  let fixture: ComponentFixture<GiftitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
