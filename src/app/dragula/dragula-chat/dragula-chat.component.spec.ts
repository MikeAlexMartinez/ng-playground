import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragulaChatComponent } from './dragula-chat.component';

describe('DragulaChatComponent', () => {
  let component: DragulaChatComponent;
  let fixture: ComponentFixture<DragulaChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragulaChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragulaChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
