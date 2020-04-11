import { Component, OnInit, Input } from "@angular/core";
import { TodoService } from "../services/todo.service";
import { ITodo } from "../interfaces/itodo";

@Component({
  selector: "app-create-todo",
  templateUrl: "./create-todo.component.html",
  styleUrls: ["./create-todo.component.css"],
})
export class CreateTodoComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  @Input() todo: ITodo;

  addToDo() {
    this.todoService.addTodo(this.todo);
    console.log(this.todo.title);

    this.todo.title = "";
  }

  ngOnInit() {}
}
