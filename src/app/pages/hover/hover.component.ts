import { CommonModule } from '@angular/common';
import { CatComponent } from '../../components/cat/cat.component';
import { DogComponent } from '../../components/dog/dog.component';
import { PlaceholderComponent } from '../../components/placeholder/placeholder.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hover',
  standalone: true,
  imports: [CommonModule,CatComponent,DogComponent,PlaceholderComponent],
  templateUrl: './hover.component.html'
})
export class HoverComponent {

}
