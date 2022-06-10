import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'todo-controls',
  templateUrl: './todo-controls.component.html',
  styleUrls: ['./todo-controls.component.css']
})
export class TodoControlsComponent implements OnInit {

  todoContent: string = ''

  @Output()
  onSaveTodo: EventEmitter<string> = new EventEmitter<string>()

  @ViewChild('todoControlInput')
  todoControlInput!: ElementRef<HTMLInputElement>

  constructor() { }

  ngOnInit(): void {
  }

  saveInTodoContent(): void {
    this.todoContent = this.todoControlInput.nativeElement.value
  }

  emitOnSaveTodo(): void {
    if (!this.stringIsEmpty(this.todoContent)) {
      this.onSaveTodo.emit(this.todoContent)
    }
  }

  private stringIsEmpty(str: string): boolean {
    return str.length === 0 || str.split('').every(char => char.charCodeAt(0) === 32)
  }
}
