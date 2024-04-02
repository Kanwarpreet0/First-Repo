import { Component } from '@angular/core';
import { Pet } from '../pet';
import { PetDataService } from '../pet-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.css'
})
export class PetDetailsComponent {

  pet: Pet | undefined;

  constructor(petDataService: PetDataService, AR: ActivatedRoute) {

    let id: number | null =  Number(AR.snapshot.paramMap.get('id'));
    
    if(id != null){
      this.pet = petDataService.getPet(id);
    }
  }
}
