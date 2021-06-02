import { Injectable } from '@angular/core';
import { Logger } from '../interfaces/logger';

@Injectable({
  providedIn: 'root'
})
export class OldLoggerService  implements Logger {

  constructor() { }

  logToConsole(message: string): void {
    console.log(`Old logger says: ${message}`);
  }
}
