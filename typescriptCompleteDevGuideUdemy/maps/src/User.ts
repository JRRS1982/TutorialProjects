import { Mappable } from './CustomMap';
import faker from 'faker';

export class User implements Mappable {  // implements basically says that User needs to have all the attributes of Mappable, it helps us set types correctly and shows errors the errors better / earlier.
  name: string;
  location: {
    lat: number,
    lng: number,
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
