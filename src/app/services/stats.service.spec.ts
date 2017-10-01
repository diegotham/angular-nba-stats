import { HttpModule, JsonpModule } from '@angular/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { StatsService } from './stats.service';

describe('Service: StatsService', () => {
    let service;

    beforeEach(() => TestBed.configureTestingModule({
      imports: [ HttpModule, JsonpModule ],
      providers: [ StatsService ]
    }));

    beforeEach(inject([StatsService], s => {
      service = s;
    }));

    it('should count 30 teams', async(() => {
      const season = '2016-17';
      service.getTeams(season).subscribe(x => {
        expect(x.length).toEqual(30);
      });
    }));
  });
