import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../main/main.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { ErrorComponent } from '../../components/error/error.component';

@Component({
  selector: 'app-deferred-view',
  standalone: true,
  imports: [CommonModule,MainComponent,LoaderComponent,ErrorComponent],
  templateUrl: './deferred-view.component.html',
  styleUrl: './deferred-view.component.scss'
})
export class DeferredViewComponent {
  appStarted = signal(false);
}
