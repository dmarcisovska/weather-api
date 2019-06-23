import { Component, OnInit } from '@angular/core';
import{WeatherService} from "../services/weather.service";
import{Config} from "../config";


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService,) { }

  show = false;
  private apiKey = Config.API_KEY;
  public cityName: string;
  public weatherModel = [];

  sendValueIntoService(cityName: string) {

    this.weatherService.setCity(cityName);
    let url = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=" + this.apiKey;

    this.weatherService.getWeather(url)
      .subscribe(data => this.weatherModel = data);

    this.show = true;

  }

  ngOnInit() {
  }

}
