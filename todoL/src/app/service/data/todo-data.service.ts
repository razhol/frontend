
import {HttpClient} from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {


  constructor(private http:HttpClient) { 
 
  }

  retrievAllTodos(){
    return this.http.get<Todo[]>('http://localhost:8080/Todos');
  }

  deleteTodo(item_number: number){
    return this.http.delete(`http://localhost:8080/delete/${item_number}`)
  }

  retrievTodo(item_number: number){
    return this.http.get<Todo>(`http://localhost:8080/Todos/${item_number}`)
  }

  WithdrawalTodo(item_number: number,amount: number, todo: Todo){
    return this.http.put(`http://localhost:8080/Withdrawal/${item_number}/${amount}`, todo)
  }

  DepositTodo(item_number: number,amount: number, todo: Todo){
    return this.http.put(`http://localhost:8080/Deposit/${item_number}/${amount}`, todo)
  }
  
  createTodo(todo:Todo){
    return this.http.post(`http://localhost:8080/addTodo`, todo)
  }
}
