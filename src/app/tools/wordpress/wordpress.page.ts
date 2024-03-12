import { Component, OnInit } from '@angular/core';
import {ToolsService} from "../services/tools.service";

@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.page.html',
  styleUrls: ['./wordpress.page.scss'],
})
export class WordpressPage implements OnInit {

  news: any[] = [];
  loading: boolean = false;

  constructor(private tooslService: ToolsService) { }

  ngOnInit() {
    this.loading = true;
    this.tooslService.getNews().subscribe(data => {
      this.news = data;
      console.log(this.news);
      this.loading = false;
    });
  }

  removeReadMore(excerpt: string): string {
    // Elimina el texto "Read more" del excerpt
    return excerpt.replace(/<a class="excerpt-read-more"(.|\n)*<\/a>/g, '...');
  }
}
