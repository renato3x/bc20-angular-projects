import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: string[] = []

  saveTodo(eventData: string) {
    this.todos.push(eventData)
  }

  deleteTodo(todoId: number) {
    this.todos = this.todos.filter((_, index) => index != todoId)
  }
}
