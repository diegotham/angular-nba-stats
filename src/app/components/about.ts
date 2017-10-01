import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    template: `
    <div class="content">
        <h1>About NBA Statistics</h1>
        <h3>Sample project in Angular4 interacting with NBA stats</h3>
        <p>
        Made by <a target="_blank" href="https://diego.com.es">Diego Lázaro</a>
        </p>
    </div>
    `
})

export class AboutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
