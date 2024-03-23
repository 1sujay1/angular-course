import { Injectable } from '@angular/core';
import { Tasks } from '../mock-tasks';
import { Task } from '../Task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private serverUrl = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    console.log('http://localhost:5000/tasks');
    return this.http.get<Task[]>(this.serverUrl);
  }
  deleteTask(task: Task): Observable<Task> {
    const url = `${this.serverUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.serverUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.serverUrl, task, httpOptions);
  }
}
