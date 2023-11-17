import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //NgModule varsayılan olarak AppModule'a gelir ancak NgModule'yi kullanbilmek için FormsModule'yi yardımcı modül olarak eklenmesi gerekmektedir
  ],
  providers: [],
  bootstrap: [TodoComponent]
})
export class AppModule { }
