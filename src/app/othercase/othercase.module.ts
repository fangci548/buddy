import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OthercasePageRoutingModule } from './othercase-routing.module';

import { OthercasePage } from './othercase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OthercasePageRoutingModule
  ],
  declarations: [OthercasePage]
})
export class OthercasePageModule {}