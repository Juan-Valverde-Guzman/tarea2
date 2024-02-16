import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ListarService {

  private BASE_URL:string = "http://localhost:8080/api/clientes"

  constructor(private http:HttpClient) { }

  getClientes() : Observable<cliente[]> {

    return this.http.get<cliente[]>(this.BASE_URL)

  }

}
