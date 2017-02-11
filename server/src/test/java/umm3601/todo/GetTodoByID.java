package umm3601.todo;

import org.junit.Test;
import java.io.IOException;
import static junit.framework.TestCase.assertEquals;

public class GetTodoByID {

    @Test
    public void getBarryInHomework() throws IOException{
        TodoController todoController = new TodoController();
        Todo todo = todoController.getTodo("5889598502be34bcf1e1a333");
        assertEquals("Incorrect Owner", "Barry", todo.owner);
        assertEquals("Incorrect Category", "homework", todo.category);
    }

    @Test
    public void getRobertaInVideoGames() throws IOException{
        TodoController todoController = new TodoController();
        Todo todo = todoController.getTodo("5889598561ad309f5e35d593");
        assertEquals("Incorrect Owner", "Roberta", todo.owner);
        assertEquals("Incorrect Category", "video games", todo.category);
    }
}