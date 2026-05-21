import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {

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

}
