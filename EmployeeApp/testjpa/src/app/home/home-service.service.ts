import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  URL:string='http://localhost:8080/api/testjpa';

  constructor(private http:HttpClient) { }

  public getEmployeesData():Observable<any>{
    return this.http.get<any>(this.URL);
  }
}
