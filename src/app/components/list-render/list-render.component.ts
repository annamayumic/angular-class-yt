import { Component, OnInit } from '@angular/core';

import { Animal } from '../../Animal';
import { ListService } from '../../service/list.service';

ListService

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];

  animalDetails = '';

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  ngOnInit(): void {}

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos de vida!`;
  }

  removeAnimal(animal: Animal) {
    this.animals = this.animals.filter((a)=>animal.name !== a.name);
    this.listService.remove(animal.id).subscribe()
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
