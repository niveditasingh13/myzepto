import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiyadhoopComponent } from './diyadhoop.component';

describe('DiyadhoopComponent', () => {
  let component: DiyadhoopComponent;
  let fixture: ComponentFixture<DiyadhoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiyadhoopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiyadhoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
