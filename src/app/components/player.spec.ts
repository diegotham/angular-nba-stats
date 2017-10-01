import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { StatsService } from '../services/stats.service';
import { HttpModule, JsonpModule } from '@angular/http';
import { PlayerComponent } from './player';
describe('PlayerComponent', () => {
  let fixture, player, element, de, compiled;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule, JsonpModule],
      declarations: [
        PlayerComponent,
      ],
      providers: [ StatsService ]
    }).compileComponents();
    fixture = TestBed.createComponent(PlayerComponent);
    player = fixture.componentInstance;
    element = fixture.nativeElement;
    de = fixture.debugElement;
    compiled = fixture.debugElement.nativeElement;
  }));

  it('should create the player', async(() => {
    expect(player).toBeTruthy();
  }));
  it(`should show message when playerNotFound`, async(() => {
    player.playerNotFound = true;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
        expect(element.querySelector('h2').innerText).toBe('We are sorry but we could not find the player requested.');
    });
  }));
  it(`should show player info when player found`, async(() => {
    player.playerNotFound = false;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
        expect(element.querySelector('h1').innerText).toBe('Information about');
    });
  }));
});
