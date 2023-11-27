import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  page = signal('');
  @Output() onPage: EventEmitter<string> = new EventEmitter<string>();

  setPage(page: string) {
    this.page.set(page);
    this.onPage.emit(page);
  }
}
