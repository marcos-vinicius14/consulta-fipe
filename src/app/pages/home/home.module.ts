import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { MenuComponent } from 'src/app/shared/menu/menu.component';
import { CardInfoComponent } from 'src/app/components/card-info/card-info.component';
import {CardSearchComponent } from 'src/app/components/card-search/card-search.component';




@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    CardInfoComponent,
    CardSearchComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    MenuComponent,
    CardInfoComponent,
    CardSearchComponent,
  ]
})
export class HomeModule { }
