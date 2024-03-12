import { Component, OnInit } from '@angular/core';
import {ToolsService} from "../services/tools.service";

@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
})
export class GeneroPage implements OnInit {
  name!: string;
  gender!: string;

  constructor(private tooslService: ToolsService) { }

  ngOnInit() {
  }

  getGender() {
    this.tooslService.getGender(this.name).subscribe((data: any) => {
      this.gender = data.gender;
    });

  }



}
