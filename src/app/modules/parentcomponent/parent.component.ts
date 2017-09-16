import {
  Component
} from '@angular/core';
import {
  childComponent
} from '../childcomponent/child.component';

@Component({
  selector: 'parent-component',
  templateUrl: './parent.component.html',

})

export class parentComponent {
  datafromchild: string;
  name: string;
  name1: string;
  constructor() {
    this.name = 'Parent component'
    this.name1 = 'Child component'
  }
  sayMyName() {
    console.log('My name is', this.name)
  }
  recieveChildData(data) {
    console.log(">>>>>>>>>>>..", data);
    this.datafromchild = data;
    console.log(">>>>>>>>>>emit", this.datafromchild);
  }

}