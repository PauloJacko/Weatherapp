import { Component, AfterViewInit } from '@angular/core';
import { WeatherService } from '../weatherapp.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class HomePage implements AfterViewInit {
  city: string = ''; 
  weatherData: any;
  map!: mapboxgl.Map;
  mapboxToken: string = ''; //AGREGAR API_KEY DE MAPBOX 

  constructor(private weatherService: WeatherService) {}

  ngAfterViewInit() {
    this.initializeMap();
  }

  getWeather() {
    this.weatherService.getWeather(this.city).subscribe(
      (data) => {
        this.weatherData = data;
        this.loadMap(data.location.lat, data.location.lon);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  initializeMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-70.6483, -33.4569], //Que salga Santiago, por defecto 
      zoom: 10,
      accessToken: this.mapboxToken,
    });
  }

  loadMap(lat: number, lon: number) {
    this.map.setCenter([lon, lat]);
    new mapboxgl.Marker().setLngLat([lon, lat]).addTo(this.map);
  }
}