/**
 * Created by holma198 on 2/14/17.
 */
/**
 * Created by holma198 on 2/14/17.
 */
import { Component, OnInit } from '@angular/core';
import { TodoListService } from "./todo-list.service";
import { Todo } from "./todo";

@Component({
    selector: 'todo-component',
    templateUrl: 'todo.component.html'
})
export class TodoComponent implements OnInit {
    public todo: Todo = null;
    private id: string;
    private status: string;

    constructor(private todoListService: TodoListService) {
        // this.todos = this.todoListService.getTodos();
    }

    private subscribeToServiceForId() {
        if (this.id) {
            this.todoListService.getTodoById(this.id).subscribe(
                todo => this.todo = todo,
                err => {
                    console.log(err);
                }
            );
        }
    }

    private subscribeToServiceForStatus() {
        if (this.status) {
            this.todoListService.getTodoByStatus(this.status).subscribe(
                todo => this.todo = todo,
                err => {
                    console.log(err);
                }
            );
        }
    }

    setId(id: string) {
        this.id = id;
        this.subscribeToServiceForId();
    }

    setStatus(status: string) {
        this.status = status;
        this.subscribeToServiceForStatus();
    }

    ngOnInit(): void {
        this.subscribeToServiceForId();
        this.subscribeToServiceForStatus();
    }
}