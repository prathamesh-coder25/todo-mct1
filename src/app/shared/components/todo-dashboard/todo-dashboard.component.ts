import { Component, OnInit } from '@angular/core';
import { Itodos } from '../../models/todo';
import { snackBarService } from '../../service/mat.service';

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
 


  constructor(private _snackBar : snackBarService) { }

  ngOnInit(): void {
  }
  

getNewTodo(todo : Itodos){
this.todosArr.push(todo)

 this._snackBar.openSnackBar(`The new Todo ${todo.todoItem} Added Successfully !!!!`)
}


}
