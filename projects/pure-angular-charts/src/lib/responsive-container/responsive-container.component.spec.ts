import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveContainerComponent } from './responsive-container.component';

describe('ResponsiveContainerComponent', () => {
  let component: ResponsiveContainerComponent;
  let fixture: ComponentFixture<ResponsiveContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
