import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PureAngularChartsComponent } from './pure-angular-charts.component';

describe('PureAngularChartsComponent', () => {
  let component: PureAngularChartsComponent;
  let fixture: ComponentFixture<PureAngularChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PureAngularChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureAngularChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
