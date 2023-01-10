import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  //URL = 'http://localhost:8080/educacion/';
  URL = 'https://backendportfoliom8.onrender.com/educacion/';

  constructor(private htttpClient: HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.htttpClient.get<Educacion[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Educacion>{
    return this.htttpClient.get<Educacion>(this.URL + `detail/${id}`)
  }

  public save(educacion: Educacion): Observable<any>{
    return this.htttpClient.post<any>(this.URL + 'create', educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any>{
    return this.htttpClient.put<any>(this.URL + `update/${id}`, educacion);
  }

  public delete(id: number): Observable<any>{
    return this.htttpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
