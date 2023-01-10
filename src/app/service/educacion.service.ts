import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  //URL = 'http://localhost:8080/educacion/';
  //URL = 'https://backendrepository-production.up.railway.app/educacion/';
  URL = environment.URL + 'educacion/';
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
