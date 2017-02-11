package umm3601.todo;

import org.junit.Test;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import static org.junit.Assert.assertEquals;

public class filterByCategory {

    @Test

    public void categoryFilterTest() throws IOException{
        TodoController todoController = new TodoController();
        Map<String, String[]> queryParameter = new HashMap<>();
        queryParameter.put("category", new String[] {"software design"});
        Todo[] softDesignTodos = todoController.listTodos(queryParameter);
        assertEquals("Wrong number of Software Design todos", 74, softDesignTodos.length);
        queryParameter.put("category", new String[] {"homework"});
        Todo[] homeworkTodos = todoController.listTodos(queryParameter);
        assertEquals("Wrong number of Homework todos", 79, homeworkTodos.length);
    }
}