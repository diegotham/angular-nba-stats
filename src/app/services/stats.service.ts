import { Injectable } from '@angular/core';
import { Http, Headers, Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { PlayerInfo } from '../models/playerInfo';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchmap';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

@Injectable()
export class StatsService {
    http: Http;
    constructor(http: Http, private jsonp: Jsonp) {
        this.http = http;
    }
    getLeaguedashplayerbiostats(perMode = 'Totals', leagueId = '00', season = '2016-17', seasonType = 'Playoffs') {
        const url = `http://stats.nba.com/stats/leaguedashplayerbiostats?perMode=${perMode}&LeagueID=${leagueId}&Season=${season}&SeasonType=${seasonType}&callback=JSONP_CALLBACK`;
        const teams$ = this.getTeams(season);
        return this.jsonp.get(url)
                .retry(3)
                .withLatestFrom(teams$)
                .map(r => {
                    const sets = r[0].json().resultSets[0];
                    const headers: Array<any> = sets.headers;
                    const playerIdIndex = headers.indexOf('PLAYER_ID');
                    const playerNameIndex = headers.indexOf('PLAYER_NAME');
                    const playerAgeIndex = headers.indexOf('AGE');
                    const playerTeamIdIndex = headers.indexOf('TEAM_ID');
                    return sets.rowSet.map(i => {
                        const playerInfo = new PlayerInfo();
                        playerInfo.id = i[playerIdIndex];
                        playerInfo.fullName = i[playerNameIndex];
                        playerInfo.age = i[playerAgeIndex];
                        playerInfo.teamId = i[playerTeamIdIndex];
                        const teamName = r[1].find(t => t.teamId === playerInfo.teamId).teamName;
                        playerInfo.teamName = teamName;
                        return playerInfo;
                    }
            );
        });
    }
    getPlayerById(playerId, season = '2016-17') {
        return this.http.get(`assets/players${season}.json`)
            .map(r => r.json().league.standard.filter(item =>
                item.personId === playerId ));
    }
    getTeams(season) {
        return this.http.get(`assets/teams${season}.json`).map(r => r.json());
    }
}
