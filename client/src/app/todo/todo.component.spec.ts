import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { Todo } from "./todo";
import { TodoComponent } from "./todo.component";
import { TodoListService } from "./todo-list.service";
import { Observable } from "rxjs";
import { PipeModule } from "../../pipe.module";

describe("Todo component", () => {

    let todoComponent: TodoComponent;
    let fixture: ComponentFixture<TodoComponent>;

    let todoListServiceStub: {
        getTodoById: (todoId: string) => Observable<Todo>
    };

    beforeEach(() => {
        // stub TodoService for test purposes
        todoListServiceStub = {
            getTodoById: (todoId: string) => Observable.of([
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
            ].find(todo => todo.id === todoId))
        };

        TestBed.configureTestingModule({
            imports: [PipeModule],
            declarations: [ TodoComponent ],
            providers:    [ { provide: TodoListService, useValue: todoListServiceStub } ]
        })
    });

    beforeEach(async(() => {
        TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(TodoComponent);
            todoComponent = fixture.componentInstance;
        });
    }));

    it("can retrieve Barry by ID", () => {
        todoComponent.setId("588959855f1ee021726da5f9");
        expect(todoComponent.todo).toBeDefined();
        expect(todoComponent.todo.owner).toBe("Barry");
        expect(todoComponent.todo.category).toBe("groceries");
    });

    it("returns undefined for Chuck_Norris", () => {
        todoComponent.setId("Chuck_Norris");
        expect(todoComponent.todo).not.toBeDefined();
    });

});
