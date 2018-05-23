import { Component, OnInit } from '@angular/core';

import { DragulaService } from 'ng2-dragula';


@Component({
  selector: 'app-dragula-sample',
  templateUrl: './dragula.component.html',
  styleUrls: ['./dragula.component.scss']
})
export class DragulaComponent implements OnInit {

  // models for simple model example
  public many: Array<string> = ['The', 'possibilities', 'are', 'endless'];
  public many2: Array<string> = ['Explore', 'Them'];

  // more complex model
  public groups: Array<any> = [
    {
      name: 'Group A',
      items: [
        {name: 'item A'},
        {name: 'item B'},
        {name: 'item C'},
        {name: 'item D'},
      ]
    },
    {
      name: 'Group B',
      items: [
        {name: 'item E'},
        {name: 'item F'},
        {name: 'item G'},
        {name: 'item H'},
      ]
    },
  ];

  printGroupA () {
    return this.groups[0].items.map(o => o.name).join(', ');
  }

  printGroupB () {
    return this.groups[1].items.map(o => o.name).join(', ');
  }

  constructor(
    private dragulaService: DragulaService
  ) { 
    dragulaService.setOptions('third-bag', {
      removeOnSpill: true
    });

    dragulaService.setOptions('fourth-bag', {
      revertOnSpill: true
    });

    dragulaService.setOptions('fifth-bag', {
      copy: true
    });

    dragulaService.setOptions('sixth-bag', {
      isContainer: function(el) {
        // only drake.containers are accessible
        // by default
        return false; 
      },
      // if moves function returns true,
      // move is enabled
      moves: (el, source, handle, sibling) => {
        console.groupCollapsed('Accepts');
        console.log("el", el);
        console.log("source", source);
        console.log("handle", handle);
        console.log("sibling", sibling);
        console.groupEnd();
        return handle.className === 'handle';
      },
      // // accepts can also be used.
      // accepts: (el, target, source, sibling) => {
      //   console.groupCollapsed('Accepts');
      //   console.log("el", el);
      //   console.log("target", target);
      //   console.log("source", source);
      //   console.log("sibling", sibling);
      //   console.groupEnd();
      //   return true; // default
      // },
      // // as can invalid
      // invalid: function (el, handle) {
      //   console.groupCollapsed('Invalid');
      //   console.log("el", el);
      //   console.log("handle", handle);
      //   console.groupEnd();
      //   return false; // default
      // }
    });
  }

  ngOnInit() {
    this.dragulaService.drag.subscribe((value) => {
      console.log('drag!');
      console.log(value);
      if (value[0] === 'second-bag') {
        this.onDrag(value.slice(1));
      }
    });
    this.dragulaService.drop.subscribe((value) => {
      console.log('drop!');
      console.log(value);
      if (value[0] === 'second-bag') {
        this.onDrop(value.slice(1));
      }
    });
    this.dragulaService.over.subscribe((value) => {
      console.log('over!');
      console.log(value);

      if (value[0] === 'second-bag') {
        this.onOver(value.slice(1));
      }
    });
    this.dragulaService.out.subscribe((value) => {
      console.log('out!');
      console.log(value);
      
      if (value[0] === 'second-bag') {
        this.onOut(value.slice(1));
      }
    });

    // these methods are used for the model changes
    this.dragulaService.dropModel.subscribe((value) => {
      console.log('dropModel');
      console.log(value);
      this.onDropModel(value.slice(1));
    });

    this.dragulaService.removeModel.subscribe((value) => {
      console.log('removeModel');
      console.log(value);
      this.onRemoveModel(value.slice(1));
    });
  }

  // These methods are used to demonstrate model
  // changes
  private onDropModel(args) {
    let [el, target, source] = args;
    // do something else
    console.log(args)
  }

  private onRemoveModel(args) {
    let [el, source] = args;
    // do something else
  }

  // following classes display events
  // drag, drop, shadow, drop, cancel, cloned, over, away dragend
  private hasClass(el: any, name: string) {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  }

  private addClass(el: any, name: string) {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(' ') : name;
    }
  }

  private removeClass(el: any, name: string) {
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
    }
  }

  private onDrag(args) {
    let [e, el] = args;
    this.removeClass(e, 'ex-moved');
  }

  private onDrop(args) {
    let [e, el] = args;
    this.addClass(e, 'ex-moved');
  }

  private onOver(args) {
    let [e, el, container] = args;
    this.addClass(el, 'ex-over');
  }

  private onOut(args) {
    let [e, el, container] = args;
    this.removeClass(el, 'ex-over');
  }

}
