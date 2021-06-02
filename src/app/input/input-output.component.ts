import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {
  @HostBinding('attr.class') className = 'component-init-style';

  @Input() receivedArr: string[];
  //renamedReceivedArr - the name from the html [renamedReceivedArr]
  //@Input('renamedReceivedArr') receivedArr: string[];

  //an EventEmitter is an object that help you implement the Observer Pattern
  @Output() outputBtnClick: EventEmitter<string>;

  constructor() { 
    this.outputBtnClick = new EventEmitter();
  }

  ngOnInit() { }

  onClick(item: string) {
    this.outputBtnClick.emit(item);
  }
}
