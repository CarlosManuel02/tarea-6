import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
  }

  public appPages = [
    {title: 'Adivinar el genero', url: '/genero', icon: 'person'},
    {title: 'Adivinar la edad', url: '/edad', icon: 'add'},
    {title: 'Universidades', url: '/universidades', icon: 'calculator'},
    {title: 'Clima local', url: '/clima', icon: 'clipboard'},
    {title: 'spotify', url: '/wordpress', icon: 'logo-wordpress'},
    {title: 'Info', url: '/info', icon: 'person-add'},
  ];

}
