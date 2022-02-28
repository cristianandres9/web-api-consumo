import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  public usuarios = [];



  constructor(public usuariosServices: UsuariosService) {}

  ngOnInit(): void {
    this.usuariosServices.getUsuarios().subscribe( (res: any) => {
      this.usuarios = res.data
      console.log(res)
    });

    // this.usuariosServices.crearUsuarios({
    //   name: "Tales",
    //   job: "Indigente"
    // });

    // this.usuariosServices.editarUsuarios({
    //   name: "Pascuales",
    //   job: "Presidente del mundo"
    // });
  }
}
