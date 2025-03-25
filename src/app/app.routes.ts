import { Routes } from '@angular/router';
import { CustomClockComponent } from './components/custom-clock/custom-clock.component';
import { ColorClockComponent } from './components/color-clock/color-clock.component';

export const routes: Routes = [
  { path: '', component: ColorClockComponent },
  { path: 'custom', component: CustomClockComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
