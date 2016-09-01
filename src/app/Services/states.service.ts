/**
 * Created by artem on 8/29/16.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { State } from '../schemas/state';

@Injectable()
export class StatesService {
    private statesUrl = 'app/states';

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    constructor(private http: Http) {}

    getStates(): Promise<State[]> {
        return this.http.get(this.statesUrl)
            .toPromise()
            .then((response) => {
                return response.json().data as State[];
            })
            .catch(this.handleError);
    }
}