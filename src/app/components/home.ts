import { Component, OnInit } from '@angular/core';
import { StatsService } from '../services/stats.service';
import { Observable } from 'rxjs/Observable';
import { PlayerInfo } from '../models/PlayerInfo';
import {Store} from '@ngrx/store';
import * as fromRoot from '../store/reducers';
@Component({
    selector: 'app-home',
    template: `
    <div class="content">
        <h1>{{title}}</h1>
        <table class="table">
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Age</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let bio of biostats$ | async">
            <td><a [routerLink]="['player', bio.id]">{{bio.fullName}}</a></td>
            <td>{{bio.age}}</td>
            <td>{{bio.teamName}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    `
})

export class HomeComponent implements OnInit {
    title: 'Playoffs season 2016-2017 players';
    biostats$: Store<PlayerInfo[]>;
    constructor(private statsService: StatsService, private store: Store<fromRoot.State>) { }

    ngOnInit() {
        this.biostats$ = this.store.select(fromRoot.getPlayers);
    }
}
