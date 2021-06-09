import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Contacto, ContactosService } from 'src/app/servicios/contactos.service';


@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {

  contactoss: Array <Contacto> = [];

  formulario: FormGroup;

  constructor( private contactos: ContactosService, private fb: FormBuilder) {
    this.contactoss = this.contactos.getContactos();
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario() {
    this.formulario = this.fb.group({
      id:[''],
      nombre:[''],
      apellidos:[''],
      genero:[''],
      descripcion:['']
    });
  }

  guardar(){
    console.log(this.formulario.value);
  }

}
