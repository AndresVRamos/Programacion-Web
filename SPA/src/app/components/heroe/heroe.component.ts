import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/servicios/heroes.service'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroes = [];

  constructor( private servicioHeroes: HeroesService) { 
    this.heroes = this.servicioHeroes.getHeroes();
  }

  ngOnInit(): void {
  }

}
