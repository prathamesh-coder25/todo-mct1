import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodos } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

@Output() EmitEditObj:EventEmitter<Itodos>=new EventEmitter<Itodos>()

  @Input() getTodos!: Array<Itodos>

  @Output() emitRemoveId: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {

  }

  onedit(todo:Itodos){
    this.EmitEditObj.emit(todo);
  }

  onRemoveId(id: string) {

    this.emitRemoveId.emit(id)

    console.log(id);

  }
}