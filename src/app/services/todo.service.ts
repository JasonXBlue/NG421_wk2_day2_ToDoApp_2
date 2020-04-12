import { Injectable } from "@angular/core";
import { ITodo } from "../interfaces/itodo";
@Injectable({
  providedIn: "root",
})
export class TodoService {
  title = "Todos";

  todoList: ITodo[] = [];
  todoId = 1;
  todoTitle: string;
  description: string;

  getTodos(): ITodo[] {
    return this.todoList;
  }

  addTodo(todoTitle: string) {
    this.todoList.push({
      id: this.todoId++,
      title: todoTitle,
      description: "",
      editing: false,
      completed: false,
    });

    // resets our todoTitle variable to an empty s this.todoTitle = "";
  }
  deleteTodo(todo: ITodo) {
    const index = this.todoList.findIndex((todoItem) => todoItem === todo);
    this.todoList.splice(index, 1);
  }
  constructor() {}
}
