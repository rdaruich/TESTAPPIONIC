import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/service/anime/anime.service';
import { MenuService } from 'src/app/service/menu/menu.service';

@Component({
  selector: 'app-list-anime',
  templateUrl: './list-anime.page.html',
  styleUrls: ['./list-anime.page.scss'],
})
export class ListAnimePage implements OnInit {
  list: any[] = [];
  constructor(private animeService: AnimeService,
    private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.menubase.title = "Listado anime";
    this.listado();
  }
  listado() {
    this.animeService.listAnime().subscribe((anime: any) => {
      console.log(anime);

      this.list = anime.data;

    })
  }
}
