import { Component } from '@angular/core';

import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-my-resize',
  templateUrl: './my-resize.component.html',
  styleUrls: ['./my-resize.component.scss']
})
export class MyResizeComponent {
  public topStyle: object = {};
  public bottomStyle: object = {};
  public textAreaStyle: object = {};

  public topHeight: number;
  public bottomHeight: number;

  validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX = 50;
    if (
      event.rectangle.width &&
      event.rectangle.height &&
      (event.rectangle.width < MIN_DIMENSIONS_PX ||
        event.rectangle.height < MIN_DIMENSIONS_PX)
    ) {
      return false;
    }
    return true;
  }

  onResizeTop(event: ResizeEvent): void {
    this.topStyle = {
      position: 'fixed',
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
    this.topHeight = event.rectangle.height;
  }

  onResizeBottom(event: ResizeEvent): void {
    this.bottomStyle = {
      position: 'fixed',
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
    this.bottomHeight = event.rectangle.height;
  }
}
