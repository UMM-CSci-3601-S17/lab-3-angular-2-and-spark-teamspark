package umm3601.todo;

import org.junit.Test;
import umm3601.user.User;

import static junit.framework.TestCase.assertEquals;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class statusTest {
    @Test
    public void statusComplete() throws IOException {
        TodoController todoController = new TodoController();
        Map<String, String[]> queryParameter = new HashMap<>();
        queryParameter.put("status", new String[] {"complete"});
        Todo[] completeTodos = todoController.listTodos(queryParameter);
        Todo completed = completeTodos[0];
        assertEquals("It's False", true, completed.status);
        assertEquals("Incorrect Nummber Of Todos", 143, completeTodos.length);
    }

    @Test
    public void statusIncomplete() throws IOException{
        TodoController todoController = new TodoController();
        Map<String, String[]> queryParameter = new HashMap<>();
        queryParameter.put("status", new String[] {"incomplete"});
        Todo[] incompleteTodos = todoController.listTodos(queryParameter);
        Todo incompleted = incompleteTodos[0];
        assertEquals("It's True", false, incompleted.status);
        assertEquals("Incorrect Nummber Of Todos", 157, incompleteTodos.length);
    }
}