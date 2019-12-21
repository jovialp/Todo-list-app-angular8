import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "My Todo List";
  todos = [
    {
      priority: 3,
      label: "Build Todo App",
      done: false
    },
    {
      priority: 1,
      label: "Drink coffee",
      done: true
    }
  ];
  addTodo(newLabel, newPriority) {
    var newTodo = {
      priority: newPriority,
      label: newLabel,
      done: false
    };
    this.todos.push(newTodo);
    this.sortTodo();
    this.setTodos();
  }
  deleteTodo(delTodo) {
    this.todos = this.todos.filter(t => t.label != delTodo.label);
    this.setTodos();
  }
  toggleStatus(stodo) {
    if (stodo.done == true) {
      stodo.done = false;
    } else {
      stodo.done = true;
    }
  }
  sortTodo() {
    this.todos = this.todos.sort((b, a) => {
      return a.priority - b.priority;
    });
  }
  addStatus = false;
  toggleAdd() {
    this.addStatus = !this.addStatus;
  }

  navStatus = false;
  toggleNav() {
    this.navStatus = !this.navStatus;
  }
  name = "John Doe";
  nameStatus = true;
  toggleName() {
    this.nameStatus = !this.nameStatus;
  }
  changeName(name) {
    this.name = name;
  }
  maleImg = "https://www.w3schools.com/howto/img_avatar.png";
  femaleImg = "https://www.w3schools.com/howto/img_avatar2.png";
  dpUrl = this.maleImg;
  gender = true;
  changeDP() {
    if (this.gender) {
      this.dpUrl = this.femaleImg;
      this.name = "Jane Doe";
      this.gender = false;
    } else {
      this.dpUrl = this.maleImg;
      this.name = "John Doe";
      this.gender = true;
    }
  }
  setTodos(){
    this.showTodos = this.todos;
    this.compTodos = this.todos.filter(t => t.done == true);
    this.pendTodos = this.todos.filter(t => t.done != true);
    this.impTodos = this.todos.filter(t => t.priority == 3);

  }
  showTodos = this.todos;
  compTodos = this.todos.filter(t => t.done == true);
  pendTodos = this.todos.filter(t => t.done != true);
  impTodos = this.todos.filter(t => t.priority == 3);
  showAllTodos() {
    this.showTodos = this.todos;
  }
  showCompTodos() {
    this.showTodos = this.todos.filter(t => t.done == true);
  }
  showPendTodos() {
    this.showTodos = this.todos.filter(t => t.done != true);
  }
  showImpTodos() {
    this.showTodos = this.todos.filter(t => t.priority == 3);
  }
  
}
