import { Routes } from "@angular/router";
import { DependencyInjectionComponent } from "../dependency-injection/dependency-injection.component";
import { FormTemplateDrivenComponent } from "../form-template-driven/form-template-driven.component";
import { LoginGuard } from "../guards/login.guard";
import { HomeComponent } from "../helper-components/home/home.component";
import { LoginComponent } from "../helper-components/login/login.component";
import { SecretPageComponent } from "../helper-components/secret-page/secret-page.component";
import { HttpClientComponent } from "../http-client/http-client.component";

export const childRoutes: Routes = [
    {
        path: '', 
        redirectTo: 'reveal-secret-1', 
        pathMatch: 'full'
    },
    {
        path: 'reveal-secret-1', 
        component: DependencyInjectionComponent
    },
    {
        path: 'reveal-secret-2', 
        component: HttpClientComponent
    }
]

export const routes: Routes = [
    {
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full'
    },
    {
        path: 'home', 
        component: HomeComponent
    },
    {
        path: 'template-driven/:id', 
        component: FormTemplateDrivenComponent
    }, 
    {
        path: 'login', 
        component: LoginComponent},
    {
        path: 'secret', 
        component: SecretPageComponent, 
        canActivate: [LoginGuard], 
        children: childRoutes // routes accessed by '/secret/childRoute'
    },
]

