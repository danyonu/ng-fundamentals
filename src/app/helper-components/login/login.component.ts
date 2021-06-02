import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleUser } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @HostBinding('attr.class') className = 'component-init-style';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(user: SimpleUser): void {
    if(this.authService.login(user)){
      this.router.navigate(['secret']);
    }
  }
}
