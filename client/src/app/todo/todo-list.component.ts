import { Component, OnInit } from '@angular/core';
import { TodoListService } from "./todo-list.service";
import { Todo } from "./todo";
import { FilterBy } from "./filter.pipe";

@Component({
    selector: 'todo-list-component',
    providers: [ FilterBy ],
    templateUrl: 'todo-list.component.html',
    // styles:  ['li.columnStyle { display: inline-block; width: 19%; height: 99%; vertical-align: text-top; }', 'li.boxStyle { display: inline-block; height: 150px; width: 99%}']

    styles: ['li.list-group-item-info {background-color: black; color: black;}', 'li.list-group-item-info2 {background-color : #333333; color : white;}' ]
})

export class TodoListComponent implements OnInit{
    public todos: Todo[];

    constructor(private todoListService: TodoListService) {
        //this.todos= this.todoListService.getTodos();
    }
    ngOnInit(): void {
        this.todoListService.getTodos().subscribe(
            todos => this.todos = todos,
            err => {
                console.log(err);
            }
        );
    }
}
