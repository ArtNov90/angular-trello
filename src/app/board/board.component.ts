import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  imports: [ListComponent, CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  board = {
    id: 1,
    title: 'Mon Trello',
    lists: [
      { 
        id: 1, 
        title: 'À faire', 
        tasks: [
          { id: 1, title: 'Acheter du lait', description: 'Ne pas oublier le lait' },
          { id: 2, title: 'Faire du sport', description: '30 min de jogging' }
        ] 
      },
      { 
        id: 2, 
        title: 'En cours', 
        tasks: [
          { id: 3, title: 'Coder une app', description: 'Finir le projet Angular' }
        ] 
      },
      { 
        id: 3, 
        title: 'Terminé', 
        tasks: [
          { id: 4, title: 'Lire un livre', description: 'Terminé "Clean Code"' }
        ] 
      }
    ]
  };
  constructor() {
    console.log(this.board);
  }
}
