import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatComponent } from '../../components/cat/cat.component';

@Component({
  selector: 'app-when',
  standalone: true,
  imports: [CommonModule,CatComponent],
  templateUrl: './when.component.html'
})
export class WhenComponent {
  comida = signal(0)
}
