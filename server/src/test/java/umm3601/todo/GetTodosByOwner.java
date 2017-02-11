package umm3601.todo;

import org.junit.Test;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import static org.junit.Assert.assertEquals;

public class GetTodosByOwner {

    @Test
    public void getTodosbyOwner() throws IOException{
        TodoController todoController = new TodoController();
        Map<String, String[]> queryParameter = new HashMap<>();
        queryParameter.put("owner", new String[] {"Blanche"});
        Todo[] blanchesTodos = todoController.listTodos(queryParameter);
        assertEquals("Wrong number of Blanches todos", 43, blanchesTodos.length);
        queryParameter.put("owner", new String[] {"dawn"});
        Todo[] dawnsTodos = todoController.listTodos(queryParameter);
        assertEquals("Wrong numberr of Dawns todos", 50, dawnsTodos.length);
    }
}