import { Component, OnInit } from '@angular/core';
import { Heroe, ServicioHeroesService } from '../servicios/servicio-heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroes: Array <Heroe> = [];

  constructor( private servicioHeroes: ServicioHeroesService ) { 
    this.heroes = this.servicioHeroes.getHeroes();
  }

  ngOnInit(): void {
  }

}
