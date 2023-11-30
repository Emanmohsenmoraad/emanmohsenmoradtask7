import { Component } from '@angular/core';
import { Employee } from './Employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  mydatatotransfer='eman mohsen';
  items=['item1','item2','item3','item4'];
  additem(newitempar:string){
    this.items.push(newitempar);
  }
  empparent!: Employee;
recievedata(par:Employee){
  this.empparent=par;
  console.log("parentdata"+par.name);
}
}
