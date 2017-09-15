import {
  Component,
  OnInit
} from '@angular/core';
import {
  parentComponent
} from './modules/parentcomponent/parent.component';
import {
  Dataservice
} from './services/dataservice';
import {
  HttpModule
} from '@angular/http';
import {
  LoginComponent
} from './modules/login/login.component';


@Component({
  selector: 'my-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Dataservice]
})


export class AppComponent {
  name: string;
  data: any;
  data1: any;
  constructor(private _dataService: Dataservice) {
    this.name = 'Anchal'
    this._dataService.getdata().subscribe(data => {
      this.data = data
    });
    this._dataService.senddata().subscribe((data) => this.data1 = data);

  }
  ngOnInit() {

  }


  sayMyName() {
    console.log('My name is', this.name)
  }
}