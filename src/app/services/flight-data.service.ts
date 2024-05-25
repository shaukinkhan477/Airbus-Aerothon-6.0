import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, timer, throwError } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlightDataService {
  private baseUrl = 'http://localhost:3002/api';

  constructor(private http: HttpClient) { }

  fetchFlightData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/fetchFlightData`).pipe(
      catchError(this.handleError)
    );
  }

  getFlightData(): Observable<any> {
    return timer(0, 30000).pipe(
      switchMap(() => this.http.get(`${this.baseUrl}/flightData`)),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
