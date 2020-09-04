import { User } from "./User";
import { Company } from "./Company";

export class CustomMap {
  private googleMap: google.maps.Map;

  private googleMapOptions = {
    zoom: 1,
    center: {
      lat: 0,
      lng: 0,
    }
  };

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId), // the Google Map API required at least one param, and it must be HTML.
      this.googleMapOptions, // we can also provide options to the map for location / zoom etc
    );
  }

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap, // where being added to
      position: { // what is being added
        lat: user.location.lat,
        lng: user.location.lng
      }
    });
  }

  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this.googleMap, 
      position: {
        lat: company.location.lat,
        lng: company.location.lng
      }
    });
  }
}