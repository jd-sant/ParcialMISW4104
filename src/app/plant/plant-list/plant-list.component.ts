import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {

  plants: Array<Plant> = [];
  totalInterior: number = 0;
  totalExterior: number = 0;
  constructor(private plantService: PlantService) { }

  getPlants(): void {
    this.plantService.getPlants().subscribe(plants => this.plants = plants);
  }
  ngOnInit() {
    this.plantService.getPlants().subscribe(plants => {
      this.plants = plants;
      this.calculateTotals();
    });
  }

  calculateTotals(): void {
    this.totalInterior = this.plants.filter(plant => plant.tipo === 'Interior').length;
    this.totalExterior = this.plants.filter(plant => plant.tipo === 'Exterior').length;
  }

}
