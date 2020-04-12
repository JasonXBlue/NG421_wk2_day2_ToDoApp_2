import { Component, OnInit, Input } from "@angular/core";
import { TodoService } from "../services/todo.service";
import { ITodo } from "../interfaces/itodo";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { ConfirmationModalComponent } from "../confirmation-modal/confirmation-modal.component";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
})
export class TodoComponent implements OnInit {
  @Input() todo: ITodo;
  beforeEditCache: string;

  constructor(
    private todoService: TodoService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.beforeEditCache = "";
  }

  editTodo(todo: ITodo): void {
    this.beforeEditCache = todo.title;
    todo.editing = true;
  }

  doneEdit(todo: ITodo): void {
    if (todo.title.trim().length === 0) {
      todo.title = this.beforeEditCache;
    }
    todo.editing = false;
  }

  cancelEdit(todo: ITodo): void {
    todo.title = this.beforeEditCache;
    todo.editing = false;
  }

  async deleteTodo() {
    const modal = this.modalService.open(ConfirmationModalComponent);
    const comp: ConfirmationModalComponent = modal.componentInstance;
    comp.modalInstance = modal;

    const result = await modal.result;

    if (result === "yes") {
      this.todoService.deleteTodo(this.todo);
    }
  }
}
