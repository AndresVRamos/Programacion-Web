import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css'],
})
export class TablaUsuariosComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private service: UsuariosService) {
    this.service.getUsuario().subscribe((res) => {
      this.usuarios = res['usuarios'];
    });
  }

  ngOnInit(): void {

  }
}
