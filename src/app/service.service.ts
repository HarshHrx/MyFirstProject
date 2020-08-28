import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  getService()
  {
    return ["Course 1","Course 2","Course 3"];
  }
  constructor() { }
}
