import { Injectable } from '@angular/core';
import { Pet } from './pet';
import { PetJson } from './json-structure';
import { cata_data } from './catalog-data';

@Injectable({
  providedIn: 'root'
})
export class PetDataService {

  private pets: Pet[] = []
  constructor() {
    cata_data.pets.forEach(
      (PetJson: PetJson) => this.pets.push(PetDataService.json_Pet(PetJson)));
  }
  private static imgDir = 'assets/images/pets/';

  private static json_Pet(PetJson: PetJson): Pet {
    const pet: Pet = new Pet();
    pet.id = PetJson.id;
    pet.name = PetJson.name;
    pet.petKind = PetJson.petKind;
    pet.age = PetJson.age;
    pet.description = PetJson.description;
    pet.breed = PetJson.breed;
    pet.image = PetDataService.imgDir + PetJson.image;
    return pet;
  }

  public getPetList(): Pet[] {
    return this.pets;
  }

  public getPet(id: number): Pet | undefined {
    return this.pets.find(Pet => Pet.id === id)
  }
}

