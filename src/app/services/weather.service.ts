import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import{Observable} from "rxjs";
import{WeatherModel} from "../shared/weather";


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  public cityName;
  private apiKey;


  public setCity(value) {
    this.cityName = value;
  }
  constructor(private http: HttpClient) {}

  public getWeather(url): Observable<WeatherModel[]> {
    return this.http.get<WeatherModel[]>(url);
  }
}
