import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedAreaChartComponent } from './stacked-area-chart.component';

describe('StackedAreaChartComponent', () => {
  let component: StackedAreaChartComponent;
  let fixture: ComponentFixture<StackedAreaChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedAreaChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedAreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
