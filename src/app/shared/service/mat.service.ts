import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
    providedIn:'root'
})
export class snackBarService{
    open(arg0: string, arg1: string, arg2: { duration: number; horizontalPosition: string; verticalPosition: string; }) {
      throw new Error('Method not implemented.');
    }
    constructor(
        private _snackBar : MatSnackBar
    ){  }
    openSnackBar(msg:string){
        this._snackBar.open(msg,`close`,{
            horizontalPosition:'left',
            verticalPosition:'top',
            duration:2000
        })
    }
}