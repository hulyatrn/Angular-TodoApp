import { Component } from '@angular/core';
import { Model,TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
model = new Model();
İsDisplay = false;

getName(): string {
  return  this.model.user;
}

getItems() {
  return this.model.items;
}

addItem(value: string){
  if(value!=""){
    this.model.items.push(new TodoItem(value,false));
  }
}
}

