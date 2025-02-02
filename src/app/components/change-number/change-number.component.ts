import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmitterComponent } from '../emitter/emitter.component';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrl: './change-number.component.css'
})
export class ChangeNumberComponent implements OnInit {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter()
  
  constructor(){

  }
  ngOnInit(): void {
    
  }

  handleClick(){
    this.changeNumber.emit()
  }
}
