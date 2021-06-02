import { Injectable } from '@angular/core';
import { Logger } from '../interfaces/logger';

@Injectable({
  providedIn: 'root'
})
export class LoggerService implements Logger {

  constructor() { }

  logToConsole(message: string) {
    console.log(`New logger: ${message}`);
  }
}
