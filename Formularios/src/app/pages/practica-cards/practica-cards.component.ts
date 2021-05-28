import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/service/heroes.service';

@Component({
  selector: 'app-practica-cards',
  templateUrl: './practica-cards.component.html',
  styleUrls: ['./practica-cards.component.css']
})
export class PracticaCardsComponent implements OnInit {

  heroes: any = {};

  constructor( private servicioHeroes: HeroesService) { 
    this.heroes = servicioHeroes.getHeroes();
    console.log(this.heroes);
   }

  ngOnInit(): void {
  }

}
