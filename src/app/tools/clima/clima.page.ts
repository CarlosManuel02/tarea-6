import { Component, OnInit } from '@angular/core';
import {ToolsService} from "../services/tools.service";


export interface Clima {
  latitude:              number;
  longitude:             number;
  generationtime_ms:     number;
  utc_offset_seconds:    number;
  timezone:              string;
  timezone_abbreviation: string;
  elevation:             number;
  hourly_units:          HourlyUnits;
  hourly:                Hourly;
}

export interface Hourly {
  time:                      string[];
  temperature_2m:            number[];
  apparent_temperature:      number[];
  precipitation_probability: number[];
  rain:                      number[];
  weather_code:              number[];
  surface_pressure:          number[];
  cloud_cover:               number[];
  visibility:                number[];
}

export interface HourlyUnits {
  time:                      string;
  temperature_2m:            string;
  apparent_temperature:      string;
  precipitation_probability: string;
  rain:                      string;
  weather_code:              string;
  surface_pressure:          string;
  cloud_cover:               string;
  visibility:                string;
}

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {
  public weatherData!: Clima;

  constructor(private toolsService: ToolsService) { }

  ngOnInit() {
    this.getWeatherData();
  }

  getWeatherData() {
    const city = 'Santo Domingo'; // Puedes cambiar esto según la ciudad que desees
    this.toolsService.getWeather(city).subscribe(
      (data) => {
        this.weatherData = data;
        console.log('Datos meteorológicos:', this.weatherData)
      },
      (error) => {
        console.error('Error obteniendo datos meteorológicos:', error);
      }
    );
  }
}
