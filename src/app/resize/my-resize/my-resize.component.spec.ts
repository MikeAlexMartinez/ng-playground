import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyResizeComponent } from './my-resize.component';

describe('MyResizeComponent', () => {
  let component: MyResizeComponent;
  let fixture: ComponentFixture<MyResizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyResizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyResizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
