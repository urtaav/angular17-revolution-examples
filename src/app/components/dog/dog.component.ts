import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dog.component.html',
  styles:`
       img{
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  `
})
export class DogComponent {

}
