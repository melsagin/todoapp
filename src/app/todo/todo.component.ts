import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { TodoItem } from './todoitem';
//import { TodoItem } from './todoitem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  displayAll: boolean = false;
  inputText: string = "";

  message ="";
  constructor() { 
    this.model.items = this.getItemsFromLS();
  }
//   addItem(txtItem: any){
//     console.log(txtItem.value);
//  }
addItem(){
  if(this.inputText!=""){
    let data = { konu: this.inputText, durum: false }
    this.model.items.push(data); //items listesinin sonuna datayı ekleme
    let items = this.getItemsFromLS();
    items.push(data);
    localStorage.setItem("items" , JSON.stringify(items)); //ls içinde verilen itemsları json formatında set etme
    this.inputText = "";
  }
  else{
    alert("Lütfen listeye eklenecek bir konu giriniz.");
  } 
}
  // private name: string = "Melsa";

  // // items = [
  // //   "item 1", "item 2", "item 3"
  // // ];

  // items: TodoItem[] = [
  //   { konu: "JavaScript" , durum: "Yes"},
  //   { konu: "Angular" , durum: "Yes"},
  //   { konu: "NodeJs" , durum: "No"}
  //   // new TodoItem("JavaScript", "Yes"),
  //   // new TodoItem("Angular", "Yes"),
  //   // new TodoItem("NodeJs", "No")
  // ]

  getItemsFromLS(){
    let items: TodoItem[] = [];
    let value = localStorage.getItem("items");
    if(value != null){
      items = JSON.parse(value);
    }
    return items;
  }

  onActionChanged(item: TodoItem){
    let items = this.getItemsFromLS();
    localStorage.clear();
    items.forEach(i =>{
      if(i.konu == item.konu){
        i.durum = item.durum;
      }
    });
    localStorage.setItem("items" , JSON.stringify(items));
  }

  model = new Model();

  getName(){
    return this.model.name;
  }

  getItems(){
    if(this.displayAll){
      return this.model.items;
    }
    return this.model.items.filter(item => item.durum === false);
  }

  displayCount(){
    return this.model.items.filter(i=>i.durum).length;
  }

  getBtnClasses(){
    return {
      'disabled' : this.inputText.length == 0,
      'btn-secondary' : this.inputText.length == 0,
      'btn-primary' : this.inputText.length > 0
    }
  }
 

}
