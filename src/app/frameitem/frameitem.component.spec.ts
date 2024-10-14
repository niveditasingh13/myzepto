import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameitemComponent } from './frameitem.component';

describe('FrameitemComponent', () => {
  let component: FrameitemComponent;
  let fixture: ComponentFixture<FrameitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrameitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
