import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  //variable de tipo privada que se llamo url la cual contrendra la url que consumiremos
  private url: string="https://reqres.in/api/users?page=1";
  //objeto http que permite hacer todas las llamadas hacia la api rest
  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<any>{
    return this.http.get<any>(this.url);
  }

  // crearUsuarios(usuarios: any): Observable<any>{
  //   return this.http.post("https://reqres.in/api/users?page=1", usuarios);
  // }

  // editarUsuarios(usuarios: any): Observable<any>{
  //   return this.http.put("https://reqres.in/api/users?page=1",usuarios);
  // }

  // eliminarUsuarios(): Observable<any>{
  //   return this.http.delete("https://reqres.in/api/users?page=1");
  }