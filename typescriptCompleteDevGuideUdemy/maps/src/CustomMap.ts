// instruction to every other class on how they can be an argument to addMarker
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

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

  addMarker(mappable: Mappable): void { // having a Mappable interface defined above means that every class that may want to be added to the map in the future does not need to be added as an OR to the params, it just needs to comply with the structure in Mappable interface.
    const marker = new google.maps.Marker({
      map: this.googleMap, // where being added to
      position: { // what is being added
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
    
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({ // here for scoping reasons only, could be raised a level, but not used elsewhere in the class.
        content: mappable.markerContent()
      });
      infoWindow.open(this.googleMap, marker) // open function on infoWindow takes two params, a html map and MVC object.
    });
  }
}