import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number;
}

export class Sync<T extends HasId> { // using a generic class means there are no properties, so we need to add id, as we need it. So any 
  constructor(public rootUrl: string) {}
  
  public fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  public save(data: T): AxiosPromise {
    const { id } = data; // destructuring - setting id as the id on data

    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data); // update existing
    } else {
      return axios.post(this.rootUrl, data); // save new
    }
  }
}