import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { WrapperComponent } from './wrapper/wrapper.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'angular-service',
    loadComponent: () =>
      loadRemoteModule('angular-service', './Component').then(
        (m) => m.AppComponent
      ),
  },
  {
    path: 'react-service',
    component: WrapperComponent,
  },
];
