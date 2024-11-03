import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantListComponent } from './plant-list/plant-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

@NgModule({
  imports: [
    CommonModule,
    HttpClientTestingModule
  ],
  exports: [PlantListComponent],
  declarations: [PlantListComponent]
})
export class PlantModule { }
