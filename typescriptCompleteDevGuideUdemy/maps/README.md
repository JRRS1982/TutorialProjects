// install
- npm install -g parcel-bundler
- npm install faker 
- npm install @types/faker
- npm install @types/googlemaps

// run program
- npx parcel index
found at http://localhost:1234/

Features
- Private google map - keeping it private
- Interface - using interface on addMarker to reverse the dependency injection and put the - requirement on the injected class to comply with the Mappable interface. If another class wants to add a marker to the map they must comply with 'Mappable'.