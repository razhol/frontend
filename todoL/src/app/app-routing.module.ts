import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent, Todo } from './list-todos/list-todos.component';
import { TodoDespositComponent } from './todo-desposit/todo-desposit.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [

  {path: '' , component:ListTodosComponent},
  {path: 'Withdrawal/:item_number' , component:TodoComponent},
  {path: 'Deposit/:item_number' , component:TodoDespositComponent},
  {path: 'addItem' , component:AddItemComponent},
  {path: '**' , component:ErrorComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
