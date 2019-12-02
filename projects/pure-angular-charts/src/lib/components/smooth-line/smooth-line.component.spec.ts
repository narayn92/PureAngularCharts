import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothLineComponent } from './smooth-line.component';

describe('SmoothLineComponent', () => {
  let component: SmoothLineComponent;
  let fixture: ComponentFixture<SmoothLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmoothLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmoothLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
