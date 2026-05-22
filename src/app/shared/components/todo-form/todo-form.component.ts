import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Itodos } from '../../models/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit,OnChanges {

  isinEditMode:boolean=false;

  @Input() editObj!:Itodos;

  @Output() EmitUpdate:EventEmitter<Itodos>=new EventEmitter<Itodos>();
  @ViewChild('isCompleted')isCompleted!:ElementRef;

   @ViewChild('todoItem')todoItem!:ElementRef
  constructor() { }
  

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
   if(changes['editObj'].currentValue){
    this.isinEditMode=true;
    this.todoItem.nativeElement.value=this.editObj.todoItem;
    this.isCompleted.nativeElement.value=this.editObj.isCompleted
   }
  }

  onUpdateTodo(){

    let updated_obj:Itodos={
      todoItem:this.todoItem.nativeElement.value,
      isCompleted:this.isCompleted.nativeElement.value==='true'?true:false,
      todoId:this.editObj.todoId
    }
    this.isinEditMode=false
    this.todoItem.nativeElement.value='';
    this.isCompleted.nativeElement.value=true
  this.EmitUpdate.emit(updated_obj)
  }

}
