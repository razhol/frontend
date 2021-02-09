import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  item_number = 10002;
  todo = new Todo(0, "33", 0, 0);

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.item_number = this.route.snapshot.params['item_number'];
    this.todo = new Todo(1, "33", 0, 0);
    this.todoService.retrievTodo(this.item_number).subscribe(
      data => this.todo = data
    )
  }

  saveTodo() {
    this.todoService.WithdrawalTodo(this.item_number, this.todo.amount, this.todo).subscribe(
      data => {
        console.log(data)
        this.router.navigate([``])
      }
    )
  }
}
