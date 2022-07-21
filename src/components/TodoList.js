import { useRecoilValue } from "recoil";
import { filteredTodoListState, todoListState } from "../recoil/state";
import TodoItem from "./TodoItem";
import TodoItemCreater from "./TodoItemCreator";
import TodoListFilters from "./TodoListFilters";
function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListFilters />
      <TodoItemCreater />
      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} />
      ))}
    </>
  );
}

export default TodoList;
