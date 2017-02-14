import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Todo } from './todo';
import { Observable } from "rxjs";

@Injectable()
export class TodoListService {
    private todoUrl: string = API_URL + "/";
    constructor(private http:Http) { }

    getTodos(): Observable<Todo[]> {
        return this.http.request(this.todoUrl + 'todos').map(res => res.json());
    }

    getTodoById(id: string): Observable<Todo> {
        return this.http.request(this.todoUrl + id).map(res => res.json());
    }

    getTodoByStatus(compl: string): Observable<Todo> {
        return this.http.request(this.todoUrl + '?status=' + compl).map(res => res.json());
    }
}
