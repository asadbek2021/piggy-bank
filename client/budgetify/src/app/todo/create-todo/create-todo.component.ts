import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})

export class CreateTodoComponent implements OnInit {



  constructor(private transactionService:TodoService) { }

  ngOnInit(): void {
  }

  onSelect(type:string) {
    this.transactionService.selectedType$.next(type);
  }

}
