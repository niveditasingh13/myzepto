import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemotecarComponent } from './remotecar.component';

describe('RemotecarComponent', () => {
  let component: RemotecarComponent;
  let fixture: ComponentFixture<RemotecarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemotecarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemotecarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
