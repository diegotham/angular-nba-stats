import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers } from './store/reducers';

import { SERVICES } from './services';
import { COMPONENTS } from './components';
import { RESOLVERS } from './resolvers';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    CommonModule,
    StoreModule.forRoot(reducers, {}),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
    AppRoutingModule
  ],
  providers: [...SERVICES, ...RESOLVERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
