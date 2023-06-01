import { Component, OnInit } from '@angular/core';
import { MenuService } from './service/menu/menu.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { MenuI } from './service/menu/menu.interface';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  menu: MenuI = this.menuService.menubase;
  constructor(
    private router: Router,
    private menuControler: MenuController,
    private menuService: MenuService
  ) { }
  redirect(item: any): void {
    this.menuControler.close();
    this.router.navigate(['/' + item.route + '']).then(() => {
      window.location.reload();
    });
  }
  ngOnInit() {
    this.menuService.menubase.title = "Menu Base";
    this.menu = this.menuService.menubase;
  }
}
