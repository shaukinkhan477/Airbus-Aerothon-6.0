import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HealthMetricsComponent } from './health-metrics/health-metrics.component';
import { RoutePlanningComponent } from './route-planning/route-planning.component';
import { ScenarioIdentificationComponent } from './scenario-identification/scenario-identification.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'route-planning', component: RoutePlanningComponent },
  { path: 'scenario-identification', component: ScenarioIdentificationComponent },
  { path: 'health-metrics', component: HealthMetricsComponent },
  { path: 'settings', component: SettingsComponent }
];
