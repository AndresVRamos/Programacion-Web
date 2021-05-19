import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  personajes = ['Chabelo', 'Babo', 'Goku', 'Juan Gabriel', 'Elon Musk'];
  
  constructor() { }

  leerPersonajes() {
    return this.personajes;
  }

}
