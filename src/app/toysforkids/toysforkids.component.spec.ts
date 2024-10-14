import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToysforkidsComponent } from './toysforkids.component';

describe('ToysforkidsComponent', () => {
  let component: ToysforkidsComponent;
  let fixture: ComponentFixture<ToysforkidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToysforkidsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToysforkidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
