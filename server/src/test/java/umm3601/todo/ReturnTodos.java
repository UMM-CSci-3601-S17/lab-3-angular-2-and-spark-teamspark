package umm3601.todo;

import org.junit.Before;
import org.junit.Test;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import static org.junit.Assert.assertEquals;

public class ReturnTodos {

    @Test
    public void totalTodoCount() throws IOException{
        TodoController todoController = new TodoController();
        Todo[] allTodos = todoController.listTodos(new HashMap<>());
        //We should find out the number of todos we actually have
        assertEquals("Incorrect number of todos", 300, allTodos.length);
    }

    @Test
    public void returnFirstTodoInFullList() throws IOException {
        TodoController todoController = new TodoController();
        Todo[] allTodos = todoController.listTodos(new HashMap<>());
        Todo firstTodo = allTodos[0];
        assertEquals("Incorrect Owner", "Blanche", firstTodo.owner);
        assertEquals("Incorrect Category", "software design", firstTodo.category);
    }

    @Test
    public void returnLimitedTodos() throws IOException{
        TodoController todoController = new TodoController();
        Map<String, String[]> queryParameter = new HashMap<>();
        queryParameter.put("limit", new String[] {"7"});
        Todo[] sevenTodos = todoController.listTodos(queryParameter);
        assertEquals("Incorrect number of todos", 7, sevenTodos.length);
        queryParameter.put("limit", new String[] {"100"});
        Todo[] oneHundredTodos = todoController.listTodos(queryParameter);
        assertEquals("Incorrect Number Of Todos", 100, oneHundredTodos.length);

    }
}