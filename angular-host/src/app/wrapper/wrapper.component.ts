import { loadRemoteModule } from '@angular-architects/native-federation';
import { Component, ElementRef, inject } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  imports: [],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.scss',
})
export class WrapperComponent {
  elm = inject(ElementRef);

  async ngOnInit() {
    await loadRemoteModule('react-service', './App');
    const root = document.createElement('app');
    this.elm.nativeElement.appendChild(root);
  }
}
