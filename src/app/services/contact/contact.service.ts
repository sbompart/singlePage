/* /**
 * Created by Saul Bompart on 08-12-2017.
 
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Rol } from '../components/roles/rol';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Injectable()
export class Services {
    todos: Observable<Rol[]>;
    public _todos: BehaviorSubject<Rol[]>;
    private baseUrl: string;
    /* private headers = new Headers({ 'Content-Type': 'application/json' }); 
    private dataStore: {  // This is where we will store our data in memory
        todos: Rol[]
    };
    constructor(private http: Http) {
        this.baseUrl = 'http://localhost:7001/api';
        this.dataStore = { todos: [] };
        this._todos = <BehaviorSubject<Rol[]>>new BehaviorSubject(this.dataStore.todos);
        this.todos = this._todos.asObservable();
    }
    loadAll() {
        this.http.get(`${this.baseUrl}/roles`)
        .subscribe(data => {
            this.dataStore.todos = data.json() as Rol[];
            this._todos.next(Object.assign({}, this.dataStore).todos);
        }, error => console.log('Could not load todos.'));
    }
/*
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
 */