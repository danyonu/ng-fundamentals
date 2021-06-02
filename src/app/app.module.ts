import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { TemplateVariableComponent } from './template-variable/template-variable.component';
import { InputOutputComponent } from './input/input-output.component';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { FormReactiveDrivenComponent } from './form-reactive-driven/form-reactive-driven.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { routes } from './routes-section/routes';
import { HomeComponent } from './helper-components/home/home.component';
import { LoginComponent } from './helper-components/login/login.component';
import { SecretPageComponent } from './helper-components/secret-page/secret-page.component';
import { DynamicComponentsComponent } from './dynamic-components/dynamic-components.component';
import { HostDirective } from './directives/host.directive';

const obj = {
  url: 'http://localhost:4200',
  name: 'local'
}

@NgModule({
  declarations: [
    AppComponent,
    TemplateVariableComponent,
    InputOutputComponent,
    FormTemplateDrivenComponent,
    FormReactiveDrivenComponent,
    DependencyInjectionComponent,
    HttpClientComponent,
    HomeComponent,
    LoginComponent,
    SecretPageComponent,
    DynamicComponentsComponent,
    HostDirective
  ],
  imports: [
    BrowserModule,
    FormsModule, // template driven directives: ngModel, NgForm
    ReactiveFormsModule, //reactive driven directives: formControl, ngFormGroup
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    // LoggendInGuard,
    // { 
    //   provide: DependencyInjectionService,
    //   useFactory() {
    //     const log: DependencyInjectionLogger = {
    //       logToConsole: (message: string): void => {
    //         console.log(`message from implementation: ${message}`);
    //       }
    //     };

    //     return new DependencyInjectionService(log);
    //   }
    // }
  ],
  entryComponents: [
    InputOutputComponent,
    FormTemplateDrivenComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
