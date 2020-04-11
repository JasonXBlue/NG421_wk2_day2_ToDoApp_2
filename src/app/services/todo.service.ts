import { Injectable } from "@angular/core";
import { ITodo } from "../interfaces/itodo";
@Injectable({
  providedIn: "root",
})
export class TodoService {
  title = "Todos";
  todoList: ITodo[] = [];
  todoTitle: string;
  todoId: number = 0;

  getTodos() {
    return this.todoList;
  }

  addTodo(todo): void {
    this.todoList.push({
      id: this.todoId,
      title: this.todoTitle,
      description: "",
    });

    // resets our todoTitle variable to an empty s this.todoTitle = "";
    this.todoId++;
  }
  deleteTodo(todo: ITodo) {
    const index = this.todoList.findIndex((todoItem) => todoItem === todo);
    this.todoList.splice(index, 1);
  }
  constructor() {}
}
