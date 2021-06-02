import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-template-driven',
  templateUrl: './form-template-driven.component.html',
  styleUrls: ['./form-template-driven.component.css']
})
export class FormTemplateDrivenComponent implements OnInit {
// if you import FormsModule, NgForm will get automatically attached to any <form> tags you have in your view
// EXCEPT for: form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm] - NgForm will NOT get automatically attached

// NgForm gives us: 
// - a FormGroup named ngForm
// - (ngSubmit)

// #f="ngForm" - take an instance of ngForm to use it in the view and send it in the controller
// f:FormGroup;

// ngModel binds a model to a form and keeps the view synced with the model
// used as standalone:
//  if ngModel is used WITH value (ngModel='theName')
//    - create a FormControl and bind it to the 'theName' model
//    - [(ngModel)]='theName' - 2 way data binding
//    - ngModel='theName' - 1 way data binding (set initial data to model)
// used WITHIN a form:
//  if ngModel is used WITHOUT value (ngModel): 
//    - create a FormControl with the input name property as a name that is automatically added to the FormGroup (the form in this case)
//    - one-way data binding
//  good to know:
//    - to use it in the view, add it to a template var: #myName='ngModel' (myName can use now the valid, touched... props)
//    - [ngModelOptions]='{standalone: true}' - will not bind the control to the form (FormGroup)
//    - [ngModelOptions]='{name: myNewName}' - change the name of the control

//NgModel and FormControl are separate objects. 
//NgModel is the directive that you use in your view, whereas FormControl is the object used for representing the data and validations in your form

@HostBinding('attr.class') className = 'component-init-style';

theName: string;

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(params => console.log(params));
    this.route.queryParams.subscribe(params => console.log(params));
  }

  ngOnInit() {
    this.theName = 'test set in controller';
  }

  submit(val:any) {
    this.theName = val.myName;
    console.log(val);
  }
}
