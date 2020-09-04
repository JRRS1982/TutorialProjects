import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { User } from './User';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map'); // in the index.html we created a HTML element called map, the google api requires a html element to be given as a first param

customMap.addCompanyMarker(company);
customMap.addUserMarker(user);
