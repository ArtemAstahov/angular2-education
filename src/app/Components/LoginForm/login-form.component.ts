/**
 * Created by artem on 8/29/16.
 */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { State } from '../../schemas/state';
import { StatesService } from '../../Services/states.service';

@Component({
    selector: 'login-form',
    templateUrl: './login-form.component.html',
    styleUrls:  ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
    loginForm: FormGroup;

    states: State[] = [];
    submitted: Boolean = false;

    constructor (
        private statesService: StatesService,
        private formBuilder: FormBuilder
    ) {}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            firstName: ['', [Validators.required, Validators.minLength(3)]],
            lastName: ['', Validators.required],
            email: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            website: '',
            comment: ''
        });

        this.statesService.getStates()
            .then((states) => this.states = states);
    }

    onSubmit(): void {
        this.submitted = true;
    }
}