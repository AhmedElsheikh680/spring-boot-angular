import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
export class Todo {
  constructor(
    public id: number,
    public description: string,
    public isDone: boolean,
    public targetDate: Date
  ){

  }
}
@Component({
  selector: 'app-listtodos',
  templateUrl: './listtodos.component.html',
  styleUrls: ['./listtodos.component.css']
})
export class ListtodosComponent implements OnInit {
  message:string;
  todos:Todo[];
      // new Todo(1, 'Learn To Dance', false, new Date()),
      // new Todo(2, 'Become An Expert At Angular', false, new Date()),
      // new Todo(3, 'Visit India ', false, new Date())
    // {id:1, description:'Learn To Dance'},
    // {id:2, description:'Become An Expert  At Angular'},
    // {id:3, description:'Vist Egypt'}
  // ]
  // todo={
  //   id:1,
  //   description:'This Is Dance'
  // }
  constructor(
    private todoService:TodoDataService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.refreshTodo();
  }
  refreshTodo(){
    this.todoService.retrieveAllTodos('Ahmed').subscribe(
      response =>{
        console.log(response);
        this.todos=response;
      }
    )
  }
  deleteTodo(id){
    console.log(`Delete Todo ${id}`);
    this.todoService.deleteTodo('Ahmed',id).subscribe(
      response=>{
        console.log(response);
        this.message=`Delete Of Todo ${id} Successful!`;
        this.refreshTodo();
      }
    );

  }
  updateTodo(id){
    console.log(`Updated  ${id}`);
    this.router.navigate(['todos', id]); 
  }
  addTodo(){
    this.router.navigate(['todos',-1]);
  }

}
