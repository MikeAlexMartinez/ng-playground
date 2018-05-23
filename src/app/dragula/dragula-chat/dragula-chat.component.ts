import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dragula-chat',
  templateUrl: './dragula-chat.component.html',
  styleUrls: ['./dragula-chat.component.scss']
})
export class DragulaChatComponent implements OnInit {

  public lab = [
    {
      type: 'lab',
      content: 'lab 1',
      resolved: false
    },
    {
      type: 'lab',
      content: 'lab 2',
      resolved: false
    },
    {
      type: 'lab',
      content: 'lab 3',
      resolved: false
    },
    {
      type: 'lab',
      content: 'lab 4',
      resolved: false
    },
    {
      type: 'lab',
      content: 'lab 5',
      resolved: false
    }
  ];

  public admin = [
    {
      type: 'admin',
      content: 'admin 1',
      resolved: false
    },
    {
      type: 'admin',
      content: 'admin 2',
      resolved: false
    },
    {
      type: 'admin',
      content: 'admin 3',
      resolved: false
    },
    {
      type: 'admin',
      content: 'admin 4',
      resolved: false
    },
    {
      type: 'admin',
      content: 'admin 5',
      resolved: false
    }
  ];

  public nurse = [
    {
      type: 'nurse',
      content: 'nurse 1',
      resolved: false
    },
    {
      type: 'nurse',
      content: 'nurse 2',
      resolved: false
    },
    {
      type: 'nurse',
      content: 'nurse 3',
      resolved: false
    },
    {
      type: 'nurse',
      content: 'nurse 4',
      resolved: false
    },
    {
      type: 'nurse',
      content: 'nurse 5',
      resolved: false
    }
  ];

  public resolved = [
    {
      type: 'lab',
      content: 'res 1',
      resolved: true
    },
    {
      type: 'admin',
      content: 'res 2',
      resolved: true
    },
    {
      type: 'nurse',
      content: 'res 3',
      resolved: true
    },
    {
      type: 'lab',
      content: 'res 4',
      resolved: true
    },
    {
      type: 'admin',
      content: 'res 5',
      resolved: true
    },
    {
      type: 'nure',
      content: 'res 6',
      resolved: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
