import { Component, OnInit } from '@angular/core';
import { Itodos } from '../../models/todo';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {

  editObj!:Itodos
  todosArr = [
    {
      todoItem: 'Worked in Jio',
      todoId: '120',
      isCompleted: true
    },
     {
      todoItem: 'Worked in Airtel',
      todoId: '121',
      isCompleted: false
    },
     {
      todoItem: 'Worked in Idea',
      todoId: '122',
      isCompleted: true
    }
  ]
 


  constructor() { }

  ngOnInit(): void {
  }

  onEdit(todo:Itodos){
    this.editObj=todo
  }

  onUpdate(todo:Itodos){
    let getindex=this.todosArr.findIndex(t=>t.todoId===todo.todoId);
    this.todosArr[getindex]=todo;
  }
}
