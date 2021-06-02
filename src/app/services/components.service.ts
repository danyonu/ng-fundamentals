import { Injectable } from '@angular/core';
import { FormTemplateDrivenComponent } from '../form-template-driven/form-template-driven.component';
import { InputOutputComponent } from '../input/input-output.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  constructor() { }

  getComponents() {
    return [
      {component: InputOutputComponent, data: ['text 1', 'text 2', 'text 3']},
      {component: FormTemplateDrivenComponent, data: []}
    ]
  }
}
