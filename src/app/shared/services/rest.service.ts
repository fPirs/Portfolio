import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  getCv(): Observable<string>{
    return this.http.get("assets/cvpirs.json").pipe(map((res:any) => {
      return res.base64;
    }));
  }
}
