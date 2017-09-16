import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';

@Component({
  selector: 'child-component',
  templateUrl: './child.component.html',

})

export class childComponent {
  childdata: string;
  @Input() name: string;
  @Output() sendToParent = new EventEmitter();
  ngOnInit() {
    this.name = "child component"
    this.childdata = "child data in parent";
    this.sendToParent.emit(this.childdata);
  }

}