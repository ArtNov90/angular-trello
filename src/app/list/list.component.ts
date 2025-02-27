import { Component, Input, effect, signal } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [TaskComponent, CommonModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() title: string = 'Nouvelle liste'; 
  @Input() tasks: { id: number; title: string; description: string }[] = []; 

  // Utilisation d'un signal pour modifier la liste des tâches de manière réactive
  taskList = signal<{ id: number; title: string; description: string }[]>([]);

  // Signals pour le formulaire d’ajout de tâche
  newTaskTitle = signal('');
  newTaskDescription = signal('');

  constructor() {
    effect(() => {
      console.log(`📝 La liste "${this.title}" a été modifiée. Nombre de tâches :`, this.taskList().length);
    });
  }

  ngOnChanges() {
    // ⚡ S'assurer que les données sont bien transmises dès qu'elles changent
    this.taskList.set([...this.tasks]);
  }

  // ⚡ Ajouter une tâche
  addTask() {
    if (this.newTaskTitle().trim() === '') return; 

    const newTask = {
      id: Date.now(), 
      title: this.newTaskTitle(),
      description: this.newTaskDescription()
    };

    // Mettre à jour le signal avec une nouvelle copie du tableau
    this.taskList.set([...this.taskList(), newTask]);

    // Réinitialiser les champs du formulaire
    this.newTaskTitle.set('');
    this.newTaskDescription.set('');
  }

  // ⚡ Supprimer une tâche
  removeTask(taskId: number) {
    this.taskList.set(this.taskList().filter(task => task.id !== taskId));
  }
}
