import { Component, OnInit } from '@angular/core';
import { Itodos } from '../../models/todo';
import { snackBarService } from '../../service/mat.service';


@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {



  editObj!:Itodos
 
  todosArr: Itodos[] = [
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
  ];

  constructor(private _snackBar : snackBarService) { }


  ngOnInit(): void {
  }
  

getNewTodo(todo : Itodos){
this.todosArr.push(todo)

 this._snackBar.openSnackBar(`The new Todo ${todo.todoItem} Added Successfully !!!!`)
}


  onEdit(todo:Itodos){
    this.editObj=todo
  }

  onUpdate(todo:Itodos){
    let getindex=this.todosArr.findIndex(t=>t.todoId===todo.todoId);
    this.todosArr[getindex]=todo;
  }

  getRemoveId(id: string) {

    let getIndex = this.todosArr.findIndex(
      todo => todo.todoId === id
    );

    if (getIndex !== -1) {

      this.todosArr.splice(getIndex, 1);

      this._snackBar.open(
        `This TodoItem is  Removed Successfully !!`,
        'close',
      {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        }
      );

    }
  }

}
