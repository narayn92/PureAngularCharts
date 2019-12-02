import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothAreaChartComponent } from './smooth-area-chart.component';

describe('SmoothAreaChartComponent', () => {
  let component: SmoothAreaChartComponent;
  let fixture: ComponentFixture<SmoothAreaChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmoothAreaChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmoothAreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
