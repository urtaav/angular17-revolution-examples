import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styles: `:host{
    width: 100%;
    height: 100%
  }`
})
export class LoaderComponent {

}
