export class WeatherModel {
  coord: Coord[];
  weather: Weather[];
  base: string;
  main: Main[];
  visibility: number;
  wind: Wind[];
  clouds: Clouds[];
  dt: number;
  sys: System[];
  id: number;
  name: string;
  cod: number;

}

export class Coord {
  lon: number;
  lat: number;
}

export class Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export class Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

export class Wind{
  speed: number;
  deg: number;
}

export class Clouds{
  all : number;
}
export class System{
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}
