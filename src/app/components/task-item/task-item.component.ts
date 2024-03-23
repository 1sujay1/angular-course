import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
@Input() task:any
@Output() onDeleteTask:EventEmitter<Task>=new EventEmitter()
@Output() onToggleREmider:EventEmitter<Task>=new EventEmitter()
faTimes = faTimes;

constructor(){}
deleteClick(task:any){
this.onDeleteTask.emit(task)
}
onToggle(task:Task){
this.onToggleREmider.emit(task)
}
}
