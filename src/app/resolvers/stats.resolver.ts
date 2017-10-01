import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {StatsService} from '../services/stats.service';
import {Store} from '@ngrx/store';
import 'rxjs/add/operator/first';
import * as fromRoot from '../store/reducers';
import * as stats from '../store/actions/stats.actions';

@Injectable()
export class StatsResolver implements Resolve<any> {
  constructor(private statsService: StatsService, private store: Store<fromRoot.State>) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.statsService.getLeaguedashplayerbiostats().first().subscribe(players =>
        this.store.dispatch(new stats.LoadPlayersAction(players))
    );
    return true;
  }
}
