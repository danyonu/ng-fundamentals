import { Component, HostBinding, OnInit } from '@angular/core';
import { HttpCallsService } from '../services/http-calls.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {
  @HostBinding('attr.class') className = 'component-init-style';
  
  users: User[];

  dummyUser: User = {
    id: 11,
    name: 'John Smith',
    username: 'jonny',
    email: 'jon@jonny.com',
    address: {street: 'arin'},
    phone: '123456789',
    website: 'www.john.com',
    company: {name: 'johnCompany'}
  };

  constructor(private httpCalls: HttpCallsService) { }

  ngOnInit() {
  }

  onGetUser() {
    this.httpCalls.getUser(1).subscribe(
      (data: User[]) => {this.users = data;}, 
      (error) => {console.log(error);}
    )
  }

  onGetUsers() {
    this.httpCalls.getUsers().subscribe(
      (data: User[]) => {this.users = data;}, 
      (error) => {console.log(error);}
    )
  }

  onSetUser() {
    this.httpCalls.setUser(this.dummyUser).subscribe(
      (data) => {console.log(data);}, 
      (error) => {console.log(error);}
    )
  }
}
