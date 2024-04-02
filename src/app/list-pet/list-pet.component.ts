import { Component } from '@angular/core';
import { Pet } from '../pet';
import { PetDataService } from '../pet-data.service';
@Component({
  selector: 'app-list-pet',
  templateUrl: './list-pet.component.html',
  styleUrl: './list-pet.component.css'
})
export class ListPetComponent {

  p: Pet[];

  constructor(petDataService: PetDataService) {
    this.p = petDataService.getPetList();
  }
}
