/**
 * Created by artem on 8/29/16.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './Components/Heroes/heroes.component';
import { DashboardComponent } from './Components/Dashboard/dashboard.component';
import { HeroDetailComponent } from './Components/HeroDetail/hero-detail.component';

const appRoutes: Routes = [
    {
        path: 'heroes',
        component: HeroesComponent
    }, {
        path: 'dashboard',
        component: DashboardComponent
    }, {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }, {
        path: 'detail/:id',
        component: HeroDetailComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);