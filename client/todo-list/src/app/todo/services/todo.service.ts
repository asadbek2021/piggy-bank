import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscriber } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { ITodoItem } from '../models/todo-item.model';
import { ITransaction } from '../models/Transactions.model';

@Injectable({
  providedIn: 'root',
})

export class TodoService {

  private todoTasks: Array<ITodoItem> = [
    {
      title: 'Shopping',
      description: 'Description 1',
      createdAt: (new Date()).toISOString(),
      expireAt: (new Date(2022,3,9)).toISOString(),
      completed: true,
    },
    {
      title: 'Home work',
      description: 'Description 2',
      createdAt:  (new Date()).toISOString(),
      expireAt:  (new Date(2022,3,9)).toISOString(),
      completed: false,
   },
   {
      title: 'Food',
      description: 'Description 3',
      createdAt:  (new Date()).toISOString(),
      expireAt:  (new Date(2022,3,9)).toISOString(),
      completed: false,
   }
];

  constructor(private http:HttpClient) {}

  todoTasks$: Subject<ITodoItem[]> = new BehaviorSubject([...this.todoTasks]);

  getTodoTasks() {
    return this.http.get<ITransaction[]>(`http://localhost:3000/transaction/6243549cb56e94a6d872193f`);
  }

  createTodo(newTodo: ITodoItem) {
    return new Observable((subscriber:Subscriber<string>) => {
      subscriber.next('Todo created');
    }).pipe(
        delay(1000),
        tap(() => {
          this.todoTasks.push(newTodo);
          this.todoTasks$.next([...this.todoTasks]);
        })
      )
  }

  searchTodo(searchText: string) {
    const filteredTodoTasks = this.todoTasks.filter(todoTask => {
      return todoTask.title.toLowerCase().match(searchText.toLowerCase());
    })
    this.todoTasks$.next([...filteredTodoTasks]);
  }

}
