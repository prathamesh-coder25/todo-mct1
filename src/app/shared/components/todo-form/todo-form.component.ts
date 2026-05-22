
import { Itodos } from '../../models/todo';
import { uuidService } from '../../service/uuid.service';
import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';


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




  @Output() EmitUpdate:EventEmitter<Itodos>=new EventEmitter<Itodos>();


  

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
  
// ngOnChanges(changes:SimpleChanges):void{
//   console.log(changes)

//   if (!!changes['getEditobj'].currentValue) {
//     this.isInEditMode=true
//     this.todoItem.nativeElement.value = this.getEditobj.todoItem
//     this.isCompleted.nativeElement.value = this .getEditobj.isCompleted
//   }
// }

  onTodoAdd(){
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
