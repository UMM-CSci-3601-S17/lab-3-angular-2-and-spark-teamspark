import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';
import { Observable } from "rxjs";

@Injectable()
export class UserListService {
    private userUrl: string = API_URL + "/";
    constructor(private http:Http) { }

    getUsers(): Observable<User[]> {
        return this.http.request(this.userUrl + 'users').map(res => res.json());
    }

    getUserById(id: string): Observable<User> {
        return this.http.request(this.userUrl + id).map(res => res.json());
    }
}