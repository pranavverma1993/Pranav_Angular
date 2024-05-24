import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PranavComponent } from './pranav.component';

describe('PranavComponent', () => {
  let component: PranavComponent;
  let fixture: ComponentFixture<PranavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PranavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PranavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
