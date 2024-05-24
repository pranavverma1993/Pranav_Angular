import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedMComponent } from './shared-m.component';

describe('SharedMComponent', () => {
  let component: SharedMComponent;
  let fixture: ComponentFixture<SharedMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
