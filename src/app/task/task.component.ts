import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task: any = { 
    id: 0, 
    title: 'Tâche par défaut', 
    description: 'Ceci est une tâche en dur' 
  };
}
