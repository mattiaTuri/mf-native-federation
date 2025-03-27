import { loadRemoteModule } from '@angular-architects/native-federation';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  imports: [],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.scss',
})
export class WrapperComponent {
  @ViewChild('reactContainer', { static: false }) reactContainer!: ElementRef;
  async ngOnInit() {
    const { default: ReactApp } = await loadRemoteModule({
      remoteName: 'react-service',
      exposedModule: './App',
    });

    ReactApp(this.reactContainer.nativeElement);
  }
}
