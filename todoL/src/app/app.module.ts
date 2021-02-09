import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { ErrorComponent } from './error/error.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { TodoDespositComponent } from './todo-desposit/todo-desposit.component';
import { AddItemComponent } from './add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTodosComponent,
    ErrorComponent,
    MenuComponent,
    TodoComponent,
    TodoDespositComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
