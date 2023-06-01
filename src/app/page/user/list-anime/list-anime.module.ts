import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListAnimePageRoutingModule } from './list-anime-routing.module';

import { ListAnimePage } from './list-anime.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListAnimePageRoutingModule,
    HttpClientModule
  ],
  declarations: [ListAnimePage],
  providers: [HttpClientModule]
})
export class ListAnimePageModule { }
