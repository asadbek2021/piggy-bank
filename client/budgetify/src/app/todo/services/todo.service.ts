import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscriber } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { AccountService } from 'src/app/services/account.service';
import IAccounts from '../models/Accounts';
import { ITodoItem } from '../models/todo-item.model';
import { ITransaction } from '../models/Transactions.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private baseUrl = 'http://localhost:3000';
  private todoTasks: Array<ITodoItem> = [
    {
      title: 'Shopping',
      description: 'Description 1',
      createdAt: new Date().toISOString(),
      expireAt: new Date(2022, 3, 9).toISOString(),
      completed: true,
    },
    {
      title: 'Home work',
      description: 'Description 2',
      createdAt: new Date().toISOString(),
      expireAt: new Date(2022, 3, 9).toISOString(),
      completed: false,
    },
    {
      title: 'Food',
      description: 'Description 3',
      createdAt: new Date().toISOString(),
      expireAt: new Date(2022, 3, 9).toISOString(),
      completed: false,
    },
  ];

  selectedType$ = new Subject<string>();

  constructor(
    private http: HttpClient,
    private accountService: AccountService
  ) {}

  todoTasks$: Subject<ITodoItem[]> = new BehaviorSubject([...this.todoTasks]);

  getTransactions(accountId:string) {
    return this.http.get<ITransaction[]>(`${this.baseUrl}/transaction/${accountId}`);
  }

  createTodo(newTodo: ITodoItem) {
    return new Observable((subscriber: Subscriber<string>) => {
      subscriber.next('Todo created');
    }).pipe(
      delay(1000),
      tap(() => {
        this.todoTasks.push(newTodo);
        this.todoTasks$.next([...this.todoTasks]);
      })
    );
  }

  searchTodo(searchText: string) {
    const filteredTodoTasks = this.todoTasks.filter((todoTask) => {
      return todoTask.title.toLowerCase().match(searchText.toLowerCase());
    });
    this.todoTasks$.next([...filteredTodoTasks]);
  }

  getAccounts() {
    return this.accountService.getAccounts();
  }
}
