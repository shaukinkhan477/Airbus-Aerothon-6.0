import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent implements OnInit {
  settings: any = {
    theme: 'Light',
    notifications: 'Enabled',
    apiIntegration: 'Enabled'
  };

  constructor() { }

  ngOnInit(): void { }
}
