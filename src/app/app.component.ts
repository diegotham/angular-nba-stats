import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <app-toolbar [siteName]="siteName"></app-toolbar>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  siteName = 'NBA Statistics';
}
