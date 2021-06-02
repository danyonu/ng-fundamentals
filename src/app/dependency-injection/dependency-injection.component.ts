import { Component, HostBinding, Inject, InjectionToken, OnInit } from '@angular/core';
import { Logger } from '../interfaces/logger';
import { ApiUrl, API_URL, LOGGERS, TOKEN, ValueLogger } from '../other-things/value-token';
import { LoggerService } from '../services/logger.service';
import { OldLoggerService } from '../services/old-logger.service';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.css'],

  // this provider will override the global one from the root (app.module in this case) and will instantiate a new instance of the service
  // viewProvider wil make accessible a new instance of the service only for the view children, not the content children
  providers: [
    // { provide: LoggerService, useExisting: OldLoggerService }, // will use the OldLoggerService with the LoggerService name, but will use the SAME instance ,
    { provide: LoggerService, useClass: OldLoggerService }, // will use the OldLoggerService with the LoggerService name, but will create a NEW instance ,
    { provide: TOKEN, useValue: ValueLogger }, // will use a value or and object ,
    { provide: API_URL, useValue: ApiUrl, multi: true },  // will use a value or and object
    { provide: LOGGERS, useExisting: LoggerService, multi: true },
    { provide: LOGGERS, useExisting: OldLoggerService, multi: true }
  ]
})
export class DependencyInjectionComponent implements OnInit {
  @HostBinding('attr.class') className = 'component-init-style';

  constructor(
    private logger: LoggerService,
    private oldLogger: OldLoggerService,
    @Inject(TOKEN) private token: string,
    @Inject(API_URL) private apiUrl: string,
    @Inject(LOGGERS) private loggers: Logger, // because multi: true is added, it will return an array of all services
    ) { }

  ngOnInit() {
    // this.logger.logToConsole('message');
    // this.oldLogger.logToConsole('message');
    console.log('is the same instance: ', this.logger === this.oldLogger);
    // console.log(this.token);
    // console.log(this.apiUrl);
    // this.loggers[0].logToConsole('message');
    // this.loggers[1].logInConsole('message');
    // console.log(this.loggers[0] === this.loggers[1]);
  }

}

