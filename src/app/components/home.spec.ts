import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { StatsService } from '../services/stats.service';
import { HttpModule, JsonpModule } from '@angular/http';
import { HomeComponent } from './home';
import { StoreModule, Store, combineReducers } from '@ngrx/store';
import * as fromRoot from '../store/reducers';
describe('HomeComponent', () => {
  let fixture, home, element, de, compiled;
  let store: Store<fromRoot.State>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [RouterTestingModule, HttpModule, JsonpModule,
            StoreModule.forRoot({
                ...fromRoot.reducers,
                'root': combineReducers(fromRoot.reducers)
                }),
        ],
        declarations: [
        HomeComponent,
      ],
      providers: [StatsService]
    }).compileComponents();
    store = TestBed.get(Store);
    spyOn(store, 'select').and.callThrough();
    fixture = TestBed.createComponent(HomeComponent);
    home = fixture.componentInstance;
    element = fixture.nativeElement;
    de = fixture.debugElement;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  }));

  it('should create the home', async(() => {
    expect(home).toBeTruthy();
  }));
  it(`should have as title 'Playoffs season 2016-2017 players'`, async(() => {
    home.title = 'Playoffs season 2016-2017 players';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
        expect(element.querySelector('h1').innerText).toBe('Playoffs season 2016-2017 players');
        expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Playoffs season 2016-2017 players');
    });
  }));
});
