import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodos } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() getTodos !: Array<Itodos>
@Output() EmitEditObj:EventEmitter<Itodos>=new EventEmitter<Itodos>()
  constructor() { }

  ngOnInit(): void {

  }

  onedit(todo:Itodos){
    this.EmitEditObj.emit(todo);
  }

}
