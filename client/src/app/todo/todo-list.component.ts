import { Component } from '@angular/core';
import { TodoListService } from "./todo-list.service";
import { FormsModule } from '@angular/forms';
import { FilterBy } from "./filter.pipe";

@Component({
    selector: 'todo-list-component',
    providers: [TodoListService],
    templateUrl: 'todo-list.component.html',
    styles:  ['li.fred { display: inline-block; width: 19%; height: 99%; }', 'li.fred2 { display: inline-block; height: 150px; width: 99%}']
})

export class TodoListComponent {
    private todos: any;

    constructor(private _todoListService: TodoListService) {
        this.todos= _todoListService.getTodos();
    }
}
