// import { Company } from './Company';
// import { User } from './User';

new google.maps.Map(
  // first parameter is required by google... and needs to be html, so we created a div on index.html
  document.getElementById('map'), 
  // second param is not required, but optional object about the options for the map.
  {
    // options on the centre of the google map.
    zoom: 1,
    center: {
      lat: 0,
      lng: 0,
    }
  }
);
