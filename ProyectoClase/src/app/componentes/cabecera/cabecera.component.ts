import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  constructor() { }
  
  public app_name = "Proyecto Clase";

  ngOnInit(): void {
  }

}
