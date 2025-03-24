import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'angular-service',
    loadComponent: () =>
      loadRemoteModule('angular-service', './Component').then(
        (m) => m.AppComponent
      ),
  },
];
