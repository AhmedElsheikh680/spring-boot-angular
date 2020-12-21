import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constant';
import { Todo } from 'src/app/listtodos/listtodos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }
  //Find All
  retrieveAllTodos(username){
    return this.http.get<Todo[]>(`${API_URL}/api/v1/users/${username}/todos`);
  }

  //DeleteById
  deleteTodo(username, id){
    return this.http.delete(`${API_URL}/api/v1/users/${username}/todos/${id}`);
  }
  //FindById
  retrieveTodo(username, id){
    return this.http.get<Todo>(`${API_URL}/api/v1/users/${username}/todos/${id}`);
  }
  //UpdateTodo
  updateTodo(username, id, todo){
    return this.http.put(`${API_URL}/api/v1/users/${username}/todos/${id}`,todo);
  }
  //CreateTodo
  createTodo(username, todo){
    return this.http.post(`${API_URL}/api/v1/users/${username}/todos`,todo);
  }

}


