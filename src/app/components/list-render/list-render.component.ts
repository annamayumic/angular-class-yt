import { Component, OnInit } from '@angular/core';
import { Animal } from '../../Animal';
import { ListService } from '../../service/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent implements OnInit{
  animals: Animal[]= [
    {name: 'Turca',  type:'Dog', age:3},
    {name: 'Miau', type: 'Dog', age: 10}
  ];
  animaldetails = ''
  constructor(private listService: ListService){

  }
  ngOnInit(): void {
    
  }
  showAge(animal: Animal){
    this.animaldetails = `o pet ${animal.name} tem ${animal.age} anos.`
  }

  removeAnimal(animal:Animal){
    console.log('remvendo animal');
    this.animals = this.listService.remove(this.animals, animal)
  }
}
