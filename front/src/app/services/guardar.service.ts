import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { guardarcliente } from '../model/guardarcliente';

@Injectable({
  providedIn: 'root'
})
export class GuardarService {

  private BASE_URL:string = "http://localhost:8080/api/cliente"

  private httpHeaders:HttpHeaders = new HttpHeaders({'Content-Type' : 'application/json'})

  constructor(private http:HttpClient) { }

  postCliente(guardarcliente:guardarcliente) : Observable<guardarcliente> {

    return this.http.post<guardarcliente>(this.BASE_URL, guardarcliente, {headers:this.httpHeaders})

  }

}
