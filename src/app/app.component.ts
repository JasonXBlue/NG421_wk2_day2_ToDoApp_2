import { Component, OnInit } from "@angular/core";
import { ITodo } from "./interfaces/itodo";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Todos";
  todoList: ITodo[] = [];
  todoTitle: string;
  todoId: number = 0;

  ngOnInit() {}

  addTodo(): void {
    this.todoList.push({
      id: this.todoId,
      title: this.todoTitle,
      description: "",
    });

    // resets our todoTitle variable to an empty string
    this.todoTitle = "";
    this.todoId++;
  }
  deleteTodo(todo: ITodo) {
    const index = this.todoList.findIndex((todoItem) => todoItem === todo);
    this.todoList.splice(index, 1);
  }
}
