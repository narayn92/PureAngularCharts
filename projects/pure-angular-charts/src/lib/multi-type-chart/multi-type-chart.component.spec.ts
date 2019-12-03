import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiTypeChartComponent } from './multi-type-chart.component';

describe('MultiTypeChartComponent', () => {
  let component: MultiTypeChartComponent;
  let fixture: ComponentFixture<MultiTypeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiTypeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiTypeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
