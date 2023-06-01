import { Injectable } from '@angular/core';
import { MenuI } from './menu.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menubase: MenuI = {
    title: 'Agregar Usuarios',
    titleMenu: 'Menu Usuarios',
    options: [
      {
        icon: "add-circle-outline",
        label: "Agregar Usuarios",
        route: "user"
      },
      {
        icon: "list-outline",
        label: "Listado de Anime",
        route: "list-anime"
      }
    ]
  }
  constructor() {

  }
}
