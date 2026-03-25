import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = "https://deployment-gray-sigma.vercel.app/data";

  constructor(private http: HttpClient) { }


  getData() : Observable<Data[]> {
    return this.http.get<Data[]>(this.url);
  }
}


export interface Data {
  "name": string,
  "age": number,
  "gender": string
}