import { Component, OnDestroy, OnInit } from '@angular/core';
import { OptimalRouteService } from '../services/optimal-route.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-route-planning',
  standalone: true,
  imports: [CommonModule,MatListModule,MatCardModule],
  templateUrl: './route-planning.component.html',
  styleUrl: './route-planning.component.css'
})
export class RoutePlanningComponent implements OnInit, OnDestroy {
  optimalRoute: any = {};
  riskAssessment: string = '';
  error: string = '';
  private subscriptions: Subscription = new Subscription();

  constructor(private optimalRouteService: OptimalRouteService) { }

  ngOnInit(): void {
    this.subscriptions.add(this.optimalRouteService.getOptimalRoute().subscribe(
      data => {
        this.optimalRoute = data.route;
        this.riskAssessment = data.riskAssessment;
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
