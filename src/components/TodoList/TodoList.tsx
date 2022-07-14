import { useState } from "react";
import { nanoid } from "nanoid";
import { Todo } from "./Todo/Todo";
import { AddTodo } from "./AddTodo";

const initialTodos = [
  { id: nanoid(), title: "Make some 🔥 noodles", done: false },
  { id: nanoid(), title: "Take care of the cats 🐈🐈🐱", done: true },
  { id: nanoid(), title: "Fix the TV 📺", done: false },
];

export function TodoList() {
  type ToDoType = {
     id: string;
     title: string;
     isComplete?: boolean;
     done?: boolean; 
  };
  const [todos, setTodos] = useState<ToDoType[]>(initialTodos);

  function addTodo(newTodoTitle: string):void {
    const newTodo = {
      id: nanoid(),
      title: newTodoTitle,
      done: false,
    };
    setTodos([...todos, newTodo]);
  }

  function updateTodo(id: string, updatedTodo: ToDoType) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          ...updatedTodo,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  function deleteTodo(id: string) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <div className="todo-list">
      <h2>Add a Todo</h2>
      <AddTodo addTodo={addTodo} />
      <h2>My Todos</h2>
      {todos.map((todo, i) => (
        <Todo
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}
