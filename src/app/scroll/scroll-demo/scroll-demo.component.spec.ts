import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollDemoComponent } from './scroll-demo.component';

describe('ScrollDemoComponent', () => {
  let component: ScrollDemoComponent;
  let fixture: ComponentFixture<ScrollDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
