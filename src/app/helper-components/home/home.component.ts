import { Component, OnInit } from '@angular/core';
import { ComponentsService } from 'src/app/services/components.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  textArr: string[] = ["Tesla", "BTC", "NIO"];
  componentsArr: any[];

  constructor(private components: ComponentsService) { }

  ngOnInit() {
    this.componentsArr = this.components.getComponents();
    console.log(this.componentsArr);
  }

  onOutputBtnClick(item: string) {
    console.log(`Item clicked from the child component ${item}`);
  }
}
