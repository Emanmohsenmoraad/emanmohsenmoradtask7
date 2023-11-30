import { Component,Output,EventEmitter} from '@angular/core';
import { Employee } from '../Employee';

@Component({
  selector: 'app-firstsibling',
  templateUrl: './firstsibling.component.html',
  styleUrls: ['./firstsibling.component.css']
})
export class FirstsiblingComponent {
  @Output() emptrans:EventEmitter<Employee> = new EventEmitter<Employee>();
employees: Employee[]=[
  {id:1,name:"Eman",city:"cairo"},
  {id:2,name:"Sameh",city:"Giza"},
  {id:3,name:"Asia",city:"Alex"},
]; newItem: any = {};
addemp(par:any){ this.newItem.id=this.employees.length + 1;

  this.employees.push(this.newItem);
  this.newItem = {};
  console.log(par);
}
showAddForm: boolean = false;
toggleAddForm() {
  this.showAddForm = !this.showAddForm;
}
empltrans(pat:Employee){
  this.emptrans.emit(pat);
}
empparent!: Employee;
recievedata(par:Employee){
  this.empparent=par;
  console.log("parentdata"+par);

}
selectedItem: any | null = null;
deleteItem(par:any): void {
  const index = this.employees.indexOf(par);
  if (index >= 0) {
    this.employees.splice(index, 1);
  }
  }
  editItem(par: any): void {
    this.selectedItem = { ...par}; 
  }

  updateItem(): void {
    if (this.selectedItem) {
      const index = this.employees.findIndex(par => par.id === this.selectedItem.id);
      if (index > -1) {
        this.employees[index] = { ...this.selectedItem }; 
        this.selectedItem = null; 
      }
    }
  }
}
