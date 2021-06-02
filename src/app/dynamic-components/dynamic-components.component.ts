import { Component, ComponentFactoryResolver, Host, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HostDirective } from '../directives/host.directive';

@Component({
  selector: 'app-dynamic-components',
  templateUrl: './dynamic-components.component.html',
  styleUrls: ['./dynamic-components.component.css']
})
export class DynamicComponentsComponent implements OnInit, OnDestroy {
  // DON'T FORGET - add entryComponents: [] to @NgModule

  // receive an array of components
  @Input() componentsArray: any[];

  // get view of the directive to be able to access the viewContainerRef service from this directive
  @ViewChild(HostDirective, {static: true}) host: HostDirective;

  componentIndex = -1;
  interval: any;
  intervalCounter = 5;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.getComponent();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.componentIndex = (this.componentIndex + 1) % this.componentsArray.length;
    const component = this.componentsArray[this.componentIndex];

    // create a factory object for the component
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component.component);

    // get an instance of container ref
    const viewContainerRef = this.host.viewContainerRef;
    viewContainerRef.clear();

    // create the component with the factory object
    const componentRef = viewContainerRef.createComponent<any>(componentFactory);

    //add data to the component
    componentRef.instance.receivedArr = component.data; 
  }

  getComponent() {
    this.interval = setInterval(() => {
      if (this.intervalCounter-- === 0) {
        clearInterval(this.interval);
      }

      this.loadComponent()
    }, 3000);
  }

}
