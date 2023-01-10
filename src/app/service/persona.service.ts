import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../model/persona.model';



@Injectable({
    providedIn: "root"
})

export class PersonaService {
    //URL = 'http://localhost:8080/persona/';
    //URL = 'https://backendrepository-production.up.railway.app/persona/';
    URL = environment.URL + 'persona/';
    constructor(private htttpClient: HttpClient) { }

  public lista(): Observable<Persona[]>{
    return this.htttpClient.get<Persona[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Persona>{
    return this.htttpClient.get<Persona>(this.URL + `detail/${id}`)
  }

  //public save(educacion: Persona): Observable<any>{
    //return this.htttpClient.post<any>(this.URL + 'create', Persona);
  //}

  public update(id: number, educacion: Persona): Observable<any>{
    return this.htttpClient.put<any>(this.URL + `update/${id}`, Persona);
  }

  //public delete(id: number): Observable<any>{
    //return this.htttpClient.delete<any>(this.URL + `delete/${id}`);
  //}
  
}