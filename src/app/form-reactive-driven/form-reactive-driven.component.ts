import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { nameValidator } from './custom-validators';

@Component({
  selector: 'app-form-reactive-driven',
  templateUrl: './form-reactive-driven.component.html',
  styleUrls: ['./form-reactive-driven.component.css']
})
export class FormReactiveDrivenComponent implements OnInit {
  @HostBinding('attr.class') className = 'component-init-style';

  myForm: FormGroup;
  myName: AbstractControl; // base class for FormControl, FormGroup and FormArray

  constructor(fb: FormBuilder) {
    //fb.control - creates new FormControl
    //fb.group - creates new FormGroup
    this.myForm = fb.group({
      myName: [
        '', 
        Validators.compose([
          Validators.required,
          nameValidator
        ])
      ],
    });

    // add the control to a variable to use it for validation in view (ex: myName.hasError('required'))
    // another way is to use 'myForm.controls.myName.hasError('required')' in the view
    this.myName = this.myForm.controls.myName;

    // both FormGroup and FormControl uses EventEmitter for valueChanges and statusChanges
    this.myName.valueChanges.subscribe(data => {
      console.log(data);
    })
   }


  ngOnInit() {
  }

  mySubmit() {
    console.log(this.myForm.value.myName);
    console.log(this.myName);
  }

}
