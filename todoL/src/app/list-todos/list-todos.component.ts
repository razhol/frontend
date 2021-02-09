import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public item_number: number,
    public name: string ,
    public amount: number,
    public inventory_code: number){
  }
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

todos = [ new Todo(4,'phone',1,122) ]
message = "";

  constructor(
    private todoService:TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
        this.todoService.retrievAllTodos().subscribe(
        response => {
        console.log(response);
        this.todos = response;
      }
    ) 
  }

  deleteTodo(item_number: number){
    console.log(`delete todo ${item_number}`);
    this.todoService.deleteTodo(item_number).subscribe(
      response => {
      console.log(response);
      this.refreshTodos();
      }  
    );
  }

   WithdrawalT(item_number: number){
     console.log(`Withdrawal ${item_number}`)
     this.router.navigate([`Withdrawal`, item_number])
  }

  DepositT(item_number: number){
     console.log(`Deposit ${item_number}`)
     this.router.navigate([`Deposit`, item_number])
    }

    addTodo(){
    this.router.navigate([`addItem`])
    }

}
