import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular17-deferrableviews';
}
