import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Itodos } from '../../models/todo';
import { uuidService } from '../../service/uuid.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
isInEditMode : boolean =false
@ViewChild('todoItem') todoItem !: ElementRef
@ViewChild('isCompleted') isCompleted !: ElementRef
@Output()emitNewTodo :EventEmitter<Itodos>= new EventEmitter<Itodos>()


@Input()getEditobj!:Itodos

  constructor( private _uuidservice : uuidService) { }

  ngOnInit(): void {
  }
  
// ngOnChanges(changes:SimpleChanges):void{
//   console.log(changes)

//   if (!!changes['getEditobj'].currentValue) {
//     this.isInEditMode=true
//     this.todoItem.nativeElement.value = this.getEditobj.todoItem
//     this.isCompleted.nativeElement.value = this .getEditobj.isCompleted
//   }
// }

  onTodoAdd(){

  let todoValue = this.todoItem.nativeElement.value.trim()
  // stop empty input
  if(todoValue === ''){
    return
  }

    let New_Todo : Itodos ={
      todoItem : this.todoItem.nativeElement.value,
      isCompleted: this.isCompleted.nativeElement.value =='true'? true:false,
        todoId:this._uuidservice.uuid()
    }
    
    this.todoItem.nativeElement.value =''
    this.isCompleted.nativeElement.value ='true'
    this.emitNewTodo.emit(New_Todo)
    console.log(New_Todo)
  }


}
