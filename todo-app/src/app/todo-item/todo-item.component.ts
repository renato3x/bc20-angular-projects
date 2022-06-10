import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todoContent: string = 'Your to-do here.'

  @Input()
  todoId: number = -1

  @Output()
  onDeleteTodo: EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {}

  emitOnDeleteTodo(): void {
    this.onDeleteTodo.emit(this.todoId)
  }
}
