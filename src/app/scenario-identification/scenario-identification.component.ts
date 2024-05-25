import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-scenario-identification',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatListModule],
  templateUrl: './scenario-identification.component.html',
  styleUrl: './scenario-identification.component.css'
})
export class ScenarioIdentificationComponent implements OnInit {
  scenarios: any[] = [
    { id: 1, description: 'Heavy fog in the morning affecting visibility' },
    { id: 2, description: 'Electronic failure in navigation system' },
    { id: 3, description: 'Unexpected storm during flight' }
  ];

  constructor() { }

  ngOnInit(): void { }
}
