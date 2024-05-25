import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-health-metrics',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatListModule],
  templateUrl: './health-metrics.component.html',
  styleUrl: './health-metrics.component.css'
})
export class HealthMetricsComponent implements OnInit {
  healthMetrics: any[] = [
    { id: 1, system: 'Engine', status: 'Normal' },
    { id: 2, system: 'Navigation', status: 'Warning' },
    { id: 3, system: 'Fuel', status: 'Normal' }
  ];

  constructor() { }

  ngOnInit(): void { }
}
