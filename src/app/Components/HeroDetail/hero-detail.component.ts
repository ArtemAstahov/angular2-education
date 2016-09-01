/**
 * Created by artem on 8/26/16.
 */
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from '../../schemas/hero';
import { HeroService } from '../../Services/hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: './hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {
    @Input()
    hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id: number = parseInt(params['id'], 10);

            this.heroService.getHero(id)
                .then((hero) => {
                   this.hero = hero;
                });
        });
    }

    goBack(): void {
        window.history.back();
    }
}