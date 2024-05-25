import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, timer, throwError } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  private baseUrl = 'http://localhost:3002/api';

  constructor(private http: HttpClient) { }

  fetchWeatherData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/fetchWeatherData`).pipe(
      catchError(this.handleError)
    );
  }

  getWeatherData(): Observable<any> {
    return timer(0, 30000).pipe(
      switchMap(() => this.http.get(`${this.baseUrl}/weatherData`)),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
