import {TestBed, async, fakeAsync, tick, inject} from '@angular/core/testing';
import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Router, RouterModule, Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {Location} from '@angular/common';

import {AppModule} from './app.module';
import {appRoutes} from './app-routing.module';
import {HomeComponent} from './components/home';
import {AboutComponent} from './components/about';

import {APP_BASE_HREF} from '@angular/common';

describe('Router tests', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes(appRoutes),
                AppModule
            ],
            providers: [{provide: APP_BASE_HREF, useValue: '/'}]
        });
    });
    it('can navigate to /about (async)', async(() => {
        const fixture = TestBed.createComponent(AboutComponent);
        TestBed.get(Router)
            .navigate(['about'])
                .then(() => {
                    expect(location.pathname.endsWith('/about')).toBe(true);
                }).catch(e => console.log(e));
    }));
    it('can navigate to /about (fakeAsync/tick)', fakeAsync(() => {
        const fixture = TestBed.createComponent(AboutComponent);
        TestBed.get(Router).navigate(['about']);
        fixture.detectChanges();
        tick();
        expect(location.pathname.endsWith('/about')).toBe(true);
    }));
    it('can navigate to /about (done)', done => {
        const fixture = TestBed.createComponent(AboutComponent);
        TestBed.get(Router)
            .navigate(['/about'])
                .then(() => {
                    expect(location.pathname.endsWith('/about')).toBe(true);
                    done();
                }).catch(e => console.log(e));
    });
});
