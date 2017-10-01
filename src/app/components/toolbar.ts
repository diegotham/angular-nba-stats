import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
    selector: 'app-toolbar',
    template: `
      <nav>
        <ul class="nav nav-pills float-right">
          <li class="nav-item">
            <a class="nav-link" [ngClass]="{'active': location.path() == ''}" [routerLink]="['']">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" [ngClass]="{'active': location.path() == '/about'}" [routerLink]="['/about']">About</a>
          </li>
        </ul>
      </nav>
      <h3 class="text-muted">{{siteName}}</h3>
    `
})
export class ToolbarComponent implements OnInit {
    @Input() siteName: string;
    constructor(public location: Location) {}
    ngOnInit() {
    }
}
