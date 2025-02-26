import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [TaskComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() list = {
    title: 'Liste par défaut',
    tasks: [
      { id: 1, title: 'Acheter du lait', description: 'Ne pas oublier' },
      { id: 2, title: 'Faire du sport', description: '30 min de jogging' }
    ] 
  };

  constructor() {
    console.log('ListComponent reçu:', this.list); 
  }
}
