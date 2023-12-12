import { Routes } from '@angular/router';
import {GuardarPersonasComponent} from "./guardar-personas/guardar-personas.component";
export const routes: Routes = [
  { path: 'guardar', component: GuardarPersonasComponent },
  {
    path: '',
    redirectTo: 'guardar',
    pathMatch: 'full'
  }
];
