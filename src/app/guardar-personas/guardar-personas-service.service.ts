import {Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()

export class GuardarPersonasService {
  constructor(private http: HttpClient) {

  }

  findUser(clave:String): Observable<any> {
    return this.http.get("http://localhost:8080/directorio-api/directorio/persona/"+clave);
  }

  saveUser(user:any):Observable<any> {
    return this.http.post("http://localhost:8080/directorio-api/directorio/persona", user);
  }


}