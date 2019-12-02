import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothAreaComponent } from './smooth-area.component';

describe('SmoothAreaComponent', () => {
  let component: SmoothAreaComponent;
  let fixture: ComponentFixture<SmoothAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmoothAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmoothAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
