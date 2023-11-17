import { TodoItem } from "./todo/todoitem";


export class Model{
    name: string;
    items: TodoItem[];

    constructor(){
        this.name = "Melsa";
        this.items = [
            { konu: "JavaScript" , durum: true},
            { konu: "Angular" , durum: false},
            { konu: "NodeJs" , durum: false}
        ];
    }
}
