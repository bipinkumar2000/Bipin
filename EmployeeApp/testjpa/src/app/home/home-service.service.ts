import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Models/Employee';


@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  URL:string='http://localhost:8080/api/testjpa';

  constructor(private http:HttpClient) { }

  public getEmployeesData():Observable<any>{
    return this.http.get<any>(this.URL);
  }
  
  public postEmployeeData(Employee:Employee):Observable<boolean>{
    return this.http.post<boolean>(this.URL,Employee);
  }
  public deleteEmployeeData(id:number):Observable<boolean>{
    return this.http.delete<boolean>(this.URL+'/'+id+'');
  }
}
