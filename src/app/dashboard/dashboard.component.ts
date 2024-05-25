import { Component, OnDestroy, OnInit } from '@angular/core';
import { FlightDataService } from '../services/flight-data.service';
import { WeatherDataService } from '../services/weather-data.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { Subscription } from 'rxjs';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatListModule, MatGridListModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit, OnDestroy {
  flightData: any = [];
  weatherData: any = [];
  error: string = '';
  private subscriptions: Subscription = new Subscription();

  constructor(
    private flightDataService: FlightDataService,
    private weatherDataService: WeatherDataService
  ) { }

  ngOnInit(): void {
    this.subscriptions.add(this.flightDataService.getFlightData().subscribe(
      data => {
        this.flightData = data;
      },
      error => {
        this.error = error;
      }
    ));

    this.subscriptions.add(this.weatherDataService.getWeatherData().subscribe(
      data => {
        this.weatherData = data;
      },
      error => {
        this.error = error;
      }
    ));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
