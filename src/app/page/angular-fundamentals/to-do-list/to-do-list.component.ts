import {Component, OnInit} from '@angular/core';
import {Task} from "../../../models/interface/task.interface";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  title = 'Lista zadań';
  taskName = 'Sugerowane zadanie codzienne: gotowanie';
  taskDate = '';
  editMode = false;

  tasks: Task[] = [
    {
      name: 'Siłownia',
      deadline: '2020-01-02',
      done: false,
    },
    {
      name: 'Nauka Angulara',
      deadline: '2020-01-03',
      done: false,
    },
    {
      name: 'Sprzątanie kuwety',
      deadline: '2020-01-04',
      done: false,
    }
  ];

  constructor() {
  }


  ngOnInit(): void {
  }

  getFooter(): string {
    return '© Lista zadań,All rights reserved.'
  }

  getDate(): Date {
    return new Date()
  }

  cleanTask() {
    this.tasks = []
  }

  createTask() {
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false
    }
    this.tasks.push(task)
    this.taskName = '';
    this.taskDate = '';
    this.sortTasks()
  }

  switchEditMode() {
    this.editMode = !this.editMode;
  }

  markTaskAsDone(task: Task) {
    task.done = true;
    this.sortTasks()
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(e => e !== task);
    this.sortTasks()
  }

  private sortTasks() {
    this.tasks = this.tasks.sort((a: Task, b: Task) =>
      a.done === b.done ? 0 : a.done ? 1 : -1);
  }
}
