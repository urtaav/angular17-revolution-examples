import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lorem-ipsum',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lorem-ipsum.component.html',
  styles: `:host{
    width: 100%;
    height: 100%
  }`
})
export class LoremIpsumComponent {

}
