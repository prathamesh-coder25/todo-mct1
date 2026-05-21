import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class uuidService{
uuid():string{
    return Date.now().toString()
}
}