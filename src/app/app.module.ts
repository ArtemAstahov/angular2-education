/**
 * Created by artem on 8/26/16.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './Services/in-memory-data.service';

import { AppComponent }         from './app.component';
import { LoginFormComponent }   from './Components/LoginForm/login-form.component';

import { HeroService }          from './Services/hero.service';
import { StatesService }        from './Services/states.service';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [
        AppComponent,
        LoginFormComponent
    ],
    providers: [
        HeroService,
        StatesService
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
