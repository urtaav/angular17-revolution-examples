import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatComponent } from '../../components/cat/cat.component';
import { DogComponent } from '../../components/dog/dog.component';
import { PlaceholderComponent } from '../../components/placeholder/placeholder.component';

@Component({
  selector: 'app-prefetch',
  standalone: true,
  imports: [CommonModule,CatComponent,DogComponent,PlaceholderComponent],
  templateUrl: './prefetch.component.html'
})
export class PrefetchComponent {
  prefetch = signal(false);
  show = signal(false);
}
