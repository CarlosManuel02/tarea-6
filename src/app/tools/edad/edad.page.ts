import { Component, OnInit } from '@angular/core';
import {ToolsService} from "../services/tools.service";

@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
})
export class EdadPage implements OnInit {

  name!: string;
  age!: number;
  constructor(private tooslService: ToolsService) { }

  ngOnInit() {
  }

  getAge(){
    this.tooslService.getAge(this.name).subscribe((data) => {
      this.age = data.age;
    });
  }

}
