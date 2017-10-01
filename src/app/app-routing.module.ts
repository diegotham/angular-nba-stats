import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home';
import { AboutComponent } from './components/about';
import { PlayerComponent } from './components/player';

import { StatsResolver } from './resolvers/stats.resolver';

export const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        resolve: {
            players: StatsResolver
        }
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'player',
        children: [
            {
                path: ':id',
                component: PlayerComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}


