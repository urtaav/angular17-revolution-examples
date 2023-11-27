import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatComponent } from '../../components/cat/cat.component';

@Component({
  selector: 'app-idle',
  standalone: true,
  imports: [CommonModule,CatComponent],
  templateUrl: './idle.component.html'
})
export class IdleComponent {

}
