import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogComponent } from '../../components/dog/dog.component';

@Component({
  selector: 'app-inmediate',
  standalone: true,
  imports: [CommonModule,DogComponent],
  templateUrl: './inmediate.component.html',
})
export class InmediateComponent {

}
