import { Component, Input  } from '@angular/core';
import { Employee } from '../Employee';

@Component({
  selector: 'app-secondsibling',
  templateUrl: './secondsibling.component.html',
  styleUrls: ['./secondsibling.component.css']
})
export class SecondsiblingComponent {
  @Input() employee!: Employee; 
  

}
