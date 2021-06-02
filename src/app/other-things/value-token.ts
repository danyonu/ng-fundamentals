import { InjectionToken } from "@angular/core";
import { Logger } from "../interfaces/logger";

export const TOKEN = new InjectionToken<string>('Value Logger object'); // create a token some description
export const API_URL = new InjectionToken<string>('Api Url string');
export const LOGGERS = new InjectionToken<Logger>('Loggers functions');

export const ValueLogger: Logger = {
  logToConsole: (message: string) => {
      console.log(`Message from ValueLogger: ${message}`)
    }
};

export const ApiUrl: string = 'https://localhost:4200';

// export const User: User = {
//   name: 'user',
//   password: 'password',
// };