import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item_number = 10002;
  todo = new Todo(0,"",0,0);


  constructor(
    private todoService: TodoDataService ,
    private route: ActivatedRoute,
    private router: Router) { }

   ngOnInit(): void {}
   saveTodo(){
      this.todoService.createTodo(this.todo).subscribe(
      data => {console.log(data) 
      this.router.navigate([``])
      }
    )
  }

}
