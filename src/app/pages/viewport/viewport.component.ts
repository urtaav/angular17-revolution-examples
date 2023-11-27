import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoremIpsumComponent } from '../../components/lorem-ipsum/lorem-ipsum.component';
import { CatComponent } from '../../components/cat/cat.component';
import { DogComponent } from '../../components/dog/dog.component';
import { PlaceholderComponent } from '../../components/placeholder/placeholder.component';

@Component({
  selector: 'app-viewport',
  standalone: true,
  imports: [CommonModule, LoremIpsumComponent, CatComponent, DogComponent, PlaceholderComponent],
  templateUrl: './viewport.component.html'
})
export class ViewportComponent {

}
