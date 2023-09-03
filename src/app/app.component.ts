import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  deleteTask(index: number) {
    this.todos.splice(index, 1);

  }

  keyHandler() {
    this.addTask()
  }

  addTask() {
    this.todos.push(this.newTask);
    this.newTask = '';
  }

  todos: string[] = []
  newTask: string = ''
}
