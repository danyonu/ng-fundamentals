import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private router: Router) { }

  ngOnInit(): void { }

  onClick(): void {
    this.router.navigate(['template-driven/:22'], { queryParams: {query: "myQuery"} });
    console.log('send query parameters');
  }
}
