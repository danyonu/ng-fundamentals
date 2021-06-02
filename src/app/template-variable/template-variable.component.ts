import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-template-variable',
  templateUrl: './template-variable.component.html',
  styleUrls: ['./template-variable.component.css']
})
export class TemplateVariableComponent implements OnInit {
  constructor() { }

  @HostBinding('attr.class') className = 'component-init-style';
  text:string = '';

  ngOnInit() {
  }

  onClick(dynamicText:HTMLInputElement) {
    this.text = dynamicText.value;
  }
}
