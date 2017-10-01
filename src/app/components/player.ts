import { Component, OnInit, Input } from '@angular/core';
import { PlayerInfo } from '../models/playerInfo';
import { ActivatedRoute } from '@angular/router';
import { StatsService } from '../services/stats.service';
@Component({
    selector: 'app-player',
    template: `
    <div *ngIf="playerNotFound !== true">
        <h1>Information about {{player?.lastName}}, {{player?.firstName}}</h1>
        <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Date of birth</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{player?.firstName}}</td>
            <td>{{player?.lastName}}</td>
            <td>{{player?.dateOfBirthUTC | date}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div *ngIf="playerNotFound === true" class="player-not-found">
      <h2>We are sorry but we could not find the player requested.</h2>
    </div>
    <button type="button" class="btn btn-primary" [routerLink]="['']">Go back to players</button>
    `
})

export class PlayerComponent implements OnInit {
    player: PlayerInfo;
    playerNotFound: boolean;
    constructor(private route: ActivatedRoute, private statsService: StatsService) {
      route.params.subscribe(p =>  {
        statsService.getPlayerById(p['id']).subscribe(player => {
          if (player.length > 0) { this.player = player[0]; } else { this.playerNotFound = true ; }
        }
        );
      });
     }
    ngOnInit() { }
}
