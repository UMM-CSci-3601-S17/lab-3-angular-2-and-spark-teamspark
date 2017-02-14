/**
 * Created by holma198 on 2/14/17.
 */
/**
 * Created by holma198 on 2/14/17.
 */
import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { Todo } from "./todo";
import { TodoListComponent } from "./todo-list.component";
import { TodoListService } from "./todo-list.service";
import { Observable } from "rxjs";
import { PipeModule } from "../../pipe.module";

describe("Todo list", () => {

    let todoList: TodoListComponent;
    let fixture: ComponentFixture<TodoListComponent>;

    let todoListServiceStub: {
        getTodos: () => Observable<Todo[]>
    };

    beforeEach(() => {
        // stub TodoService for test purposes
        todoListServiceStub = {
            getTodos: () => Observable.of([
                {
                    id: "588959855f1ee021726da5f9",
                    owner: "Barry",
                    status: true,
                    body: "Veniam est laboris sit eiusmod enim culpa pariatur ullamco est irure pariatur cillum. Id cupidatat ut eiusmod do fugiat et aliquip velit.",
                    category: "groceries"
                },
                {
                    id: "588959850d44728ffa7b49cb",
                    owner: "Workman",
                    status: false,
                    body: "Adipisicing officia deserunt dolore velit duis. Magna non mollit officia exercitation aliqua consectetur eu fugiat sunt laborum eiusmod dolor ut.",
                    category: "homework"
                },
                {
                    id: "5889598507bf610948f8fb64",
                    owner: "Workman",
                    status: false,
                    body: "Deserunt nisi elit ullamco est occaecat fugiat. Anim consectetur ut proident exercitation eiusmod nisi tempor Lorem dolor anim.",
                    category: "video games"
                }
            ])
        };

        TestBed.configureTestingModule({
            imports: [PipeModule],
            declarations: [ TodoListComponent ],
            // providers:    [ TodoListService ]  // NO! Don't provide the real service!
            // Provide a test-double instead
            providers:    [ { provide: TodoListService, useValue: todoListServiceStub } ]
        })
    });

    beforeEach(async(() => {
        TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(TodoListComponent);
            todoList = fixture.componentInstance;
        });
    }));

    it("contains all the todos", () => {
        fixture.detectChanges();
        expect(todoList.todos.length).toBe(3);
    });

    it("contains a todo named 'Workman'", () => {
        fixture.detectChanges();
        expect(todoList.todos.some((todo: Todo) => todo.owner === "Workman" )).toBe(true);
    });

    it("contain a todo named 'Barry'", () => {
        fixture.detectChanges();
        expect(todoList.todos.some((todo: Todo) => todo.owner === "Barry" )).toBe(true);
    });

    it("doesn't contain a todo named 'Santa'", () => {
        fixture.detectChanges();
        expect(todoList.todos.some((todo: Todo) => todo.owner === "Santa" )).toBe(false);
    });

    it("has two todos that are complete", () => {
        fixture.detectChanges();
        expect(todoList.todos.filter((todo: Todo) => todo.status === true).length).toBe(2);
    });

});