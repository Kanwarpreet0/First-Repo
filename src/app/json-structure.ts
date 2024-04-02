

export interface CatalogJson {
  pets: PetJson[];
}

export interface PetJson {
  id: number;
  name: string;
  petKind: string;
  age: number;
  image: string;
  description: string;
  breed: string;
}
