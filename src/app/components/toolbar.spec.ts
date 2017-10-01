import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { ToolbarComponent } from './toolbar';
describe('ToolbarComponent', () => {
  let fixture, toolbar, element, de, compiled;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        ToolbarComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(ToolbarComponent);
    toolbar = fixture.componentInstance; // to access properties and methods
    element = fixture.nativeElement; // to access DOM element
    de = fixture.debugElement; // test helper
    compiled = fixture.debugElement.nativeElement;
  }));

  it('should create the toolbar', async(() => {
    expect(toolbar).toBeTruthy();
  }));
  it(`should have as title 'NBA Statistics'`, async(() => {
    toolbar.siteName = 'NBA Statistics';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
        expect(element.querySelector('h3').innerText).toBe('NBA Statistics');
        expect(de.query(By.css('h3')).nativeElement.innerText).toBe('NBA Statistics');
    });
  }));
});
