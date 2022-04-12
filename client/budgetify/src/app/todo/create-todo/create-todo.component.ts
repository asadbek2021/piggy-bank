import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})

export class CreateTodoComponent implements OnInit {

  createForm:FormGroup= new FormGroup({
    title: new FormControl('', Validators.required ),
    description: new FormControl('', Validators.required ),
    expireAt: new FormControl('', Validators.required ),
  });

  constructor(private todoService:TodoService, private spinnerService:SpinnerService) { }

  ngOnInit(): void {
  }

  onSubmit(formRef: FormGroupDirective):void {
    const {value} = this.createForm;
    const newTodo = {
      title: value.title,
      description: value.description,
      expireAt: value.expireAt,
      createdAt: new Date().toISOString(),
      completed: false,
    };
    this.spinnerService.showSpinner();
    this.todoService.createTodo(newTodo).subscribe((result:string)=>{
     console.log(result);
     this.createForm.reset();
     formRef.resetForm();
   });

  }

}
