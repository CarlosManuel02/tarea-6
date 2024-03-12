import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  private apiKey = 'TU_API_KEY'; // Reemplaza 'TU_API_KEY' con tu clave de API de Weatherstack

  constructor(private http: HttpClient) {
  }

  getGender(name: string) {
    const genderApi = "https://api.genderize.io/"
    return this.http.get<any>(genderApi + "?name=" + name);
  }

  getAge(name: string) {
    const ageApi = "https://api.agify.io/"
    return this.http.get<any>(ageApi + "?name=" + name);
  }

  getUniversity(country: string) {
    const universityApi = "http://universities.hipolabs.com/search?country=" + country;
    return this.http.get<any>(universityApi);
  }

  getWeather(city: string): Observable<any> {
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=18.483402&longitude=-69.929611&hourly=temperature_2m,apparent_temperature,precipitation_probability,rain,weather_code,surface_pressure,cloud_cover,visibility`;
    return this.http.get<any>(apiUrl);
  }

  getNews(): Observable<any[]> {
    const newsApi = 'https://newsroom.spotify.com/wp-json/wp/v2/posts';
    return this.http.get<any[]>(newsApi);
  }
}
