/**
 * Created by artem on 8/30/16.
 */
import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let states = [
            {label: 'Alabama', value: 'Alabama'},
            {label: 'Alaska', value: 'Alaska'},
            {label: 'Arizona', value: 'Arizona'},
            {label: 'Arkansas', value: 'Arkansas'},
            {label: 'Wyoming', value: 'Wyoming'},
            {label: 'Wisconsin', value: 'Wisconsin'},
            {label: 'West Virginia', value: 'West Virginia'},
            {label: 'Washington', value: 'Washington'},
            {label: 'Virginia', value: 'Virginia'},
            {label: 'Vermont', value: 'Vermont'},
            {label: 'Uttah', value: 'Uttah'},
            {label: 'Texas', value: 'Texas'},
            {label: 'Tennessee', value: 'Tennessee'},
            {label: 'South Dakota', value: 'South Dakota'},
            {label: 'South Carolina', value: 'South Carolina'},
            {label: 'Rhode Island', value: 'Rhode Island'},
            {label: 'Pennsylvania', value: 'Pennsylvania'},
            {label: 'Oregon', value: 'Oregon'},
            {label: 'Oklahoma', value: 'Oklahoma'},
            {label: 'Ohio', value: 'Ohio'},
            {label: 'North Dakota', value: 'North Dakota'},
            {label: 'North Carolina', value: 'North Carolina'},
            {label: 'New York', value: 'New York'},
            {label: 'New Mexico', value: 'New Mexico'},
        ];

        let heroes = [
            {id: 11, name: 'Mr. Nice'},
            {id: 12, name: 'Narco'},
            {id: 13, name: 'Bombasto'},
            {id: 14, name: 'Celeritas'},
            {id: 15, name: 'Magneta'},
            {id: 16, name: 'RubberMan'},
            {id: 17, name: 'Dynama'},
            {id: 18, name: 'Dr IQ'},
            {id: 19, name: 'Magma'},
            {id: 20, name: 'Tornado'}
        ];

        return {
            heroes,
            states
        };
    }
}
