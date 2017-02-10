package umm3601.todo;

import com.google.gson.Gson;

import java.io.FileReader;
import java.io.IOException;
import java.util.Arrays;
import java.util.Map;

public class TodoController {

    private Todo[] todos;

    public TodoController() throws IOException{
        Gson gson = new Gson();
        FileReader reader = new FileReader("src/main/data/todos.json");
        todos = gson.fromJson(reader, Todo[].class);
    }

    public Todo[] listTodos(Map<String, String[]> queryParameter) {
        Todo[] filteredTodos = todos;

        //limited list of todos
        if (queryParameter.containsKey("limit")) {
            int listLimit = Integer.parseInt(queryParameter.get("limit")[0]);
            filteredTodos = limitedList(filteredTodos, listLimit);
        }

        //status todos
        if(queryParameter.containsKey("status")) {
            Boolean progress = false;
            String stateOfTodo = queryParameter.get("status")[0];
            if(stateOfTodo.equals("complete")){
                progress = true;
            }
            filteredTodos = filterStatusTodos(filteredTodos, progress);
        }

        //Todos with specified word in body
        if(queryParameter.containsKey("contains")){
            String specifiedWord = queryParameter.get("contains")[0];
            filteredTodos = containedInBody(filteredTodos, specifiedWord);
        }

        //Todos specified by owner
        if(queryParameter.containsKey("owner")){
            String whoseTodo = queryParameter.get("owner")[0];
            filteredTodos = findTheirTodos(filteredTodos, whoseTodo);
        }

        //Todos specified by category
        if(queryParameter.containsKey("category")){
            String whatCategory = queryParameter.get("category")[0];
            filteredTodos = filterByCategory(filteredTodos, whatCategory);
        }

        return filteredTodos;
    }

    // Returns a Single one
    public Todo getTodo(String id){
        return Arrays.stream(todos).filter(x -> x._id.equals(id)).findFirst().orElse(null);
    }

    //Return specified number of todos
    public Todo[] limitedList(Todo[] filteredTodos, int listLimit){
        filteredTodos = new Todo[listLimit];

        for(int i = 0; i < listLimit; i++) {
            filteredTodos[i] = todos[i];
        }

        return filteredTodos;
    }

    //returns completed or incomleted todos
    public Todo[] filterStatusTodos(Todo[] statusTodos, boolean todoStatus){
        return Arrays.stream(statusTodos).filter(x -> x.status == todoStatus).toArray(Todo[]::new);
    }

    //returns todos with specified word
    public Todo[] containedInBody(Todo[] todosWithWord, String specifiedWord){
        return Arrays.stream(todosWithWord).filter(x -> x.body.toLowerCase().contains(specifiedWord.toLowerCase())).toArray(Todo[]::new);
    }

    //returns todos of specified owner
    //Made it so it will automatically remove whitespaces when placed in URL
    public Todo[] findTheirTodos(Todo[] ownerTodos, String whoseTodo){
        return Arrays.stream(ownerTodos).filter(x -> x.owner.replace(" ","").equalsIgnoreCase(whoseTodo.replace(" ",""))).toArray(Todo[]::new);
    }

    //returns todos by category
    public Todo[] filterByCategory(Todo[] categoryTodos, String whatCategory){
        return Arrays.stream(categoryTodos).filter(x -> x.category.equalsIgnoreCase(whatCategory)).toArray(Todo[]::new);
    }


}