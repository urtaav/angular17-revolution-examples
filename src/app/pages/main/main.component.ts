import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../components/menu/menu.component';
import { WhenComponent } from '../when/when.component';
import { IdleComponent } from '../idle/idle.component';
import { ViewportComponent } from '../viewport/viewport.component';
import { InteractionComponent } from '../interaction/interaction.component';
import { PrefetchComponent } from '../prefetch/prefetch.component';
import { InmediateComponent } from '../inmediate/inmediate.component';
import { TimmerComponent } from '../timmer/timmer.component';
import { HoverComponent } from '../hover/hover.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,
    MenuComponent,
    WhenComponent,
    IdleComponent,
    InmediateComponent,
    TimmerComponent,
    ViewportComponent,
    InteractionComponent,
    HoverComponent,
    PrefetchComponent,
  ],
  templateUrl: './main.component.html',
})
export class MainComponent {
  page = signal('');

  setPage(page: string) {
    this.page.set(page);
  }
}
