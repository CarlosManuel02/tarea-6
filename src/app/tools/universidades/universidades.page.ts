import {Component, OnInit} from '@angular/core';
import {ToolsService} from "../services/tools.service";

interface Universidad {
  name: string;
  domains: string[];
  web_pages: string[];
}

@Component({
  selector: 'app-universidades',
  templateUrl: './universidades.page.html',
  styleUrls: ['./universidades.page.scss'],
})
export class UniversidadesPage implements OnInit {
  pais: string = '';
  universidades: Universidad[] = [];

  constructor(private toolsService: ToolsService) {
  }

  ngOnInit() {
  }

  buscarUniversidades() {
    if (this.pais.trim() !== '') {
      this.toolsService.getUniversity(this.pais).subscribe(
        (data: Universidad[]) => {
          this.universidades = data;
        },
        (error) => {
          console.error('Error al obtener los datos de las universidades:', error);
        }
      );
    }
  }
}
