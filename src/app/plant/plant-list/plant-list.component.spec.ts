/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker'

import { PlantListComponent } from './plant-list.component';
import { PlantService } from '../plant.service';
import { Plant } from '../plant';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PlantListComponent', () => {
  let component: PlantListComponent;
  let fixture: ComponentFixture<PlantListComponent>;
  let debug: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ PlantListComponent ],
      providers: [PlantService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++){
      const plant = new Plant(
        faker.number.int(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.number.int(),
        faker.lorem.word(),
        faker.lorem.word()
      );
      component.plants.push(plant);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should exist a table', () => {
    const table = debug.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('should have 3 plants', () => {
    expect(component.plants.length).toBe(3);
  });

  it('should have 3 tr elements', () => {
    const trs = debug.queryAll(By.css('tr'));
    expect(trs.length).toBe(4);
  });

  it('should have 3 td elements', () => {
    const tds = debug.queryAll(By.css('td'));
    expect(tds.length).toBe(9);
  });

});
