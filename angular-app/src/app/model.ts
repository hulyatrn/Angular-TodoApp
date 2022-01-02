export class Model {
  user;
  items;

  constructor() {

    this.user = "Hulya";
    this.items = [
      new TodoItem("Spor yapmak",false),
      new TodoItem("Kahvaltı etmek",true),
      new TodoItem("Film izlemek",true),
      new TodoItem("Oyun oynamak",false),
    ];
  }
}

export class TodoItem {
  tanim;
  eylem;

  constructor(tanim: string,eylem: boolean) {
    this.tanim=tanim;
    this.eylem=eylem;
  }
}
