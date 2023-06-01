import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListAnimePage } from './list-anime.page';

const routes: Routes = [
  {
    path: '',
    component: ListAnimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListAnimePageRoutingModule {}
