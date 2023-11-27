import {
  NgFor,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  templateUrl: './control-flow.component.html',
  standalone: true,
  styleUrls: ['./control-flow.component.scss'],
  imports: [NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgFor],
})
export class ControlFlowComponent {
  showIf = false;
  showFor = false;
  showSwitch = 1;
  lenguajes: string[] = [
    'Java',
    'JavaScript',
    'TypeScript',
    'C#',
    'Python',
    'Powershell',
  ];

  showElementNgIf = () => {
    this.showIf = !this.showIf;
  };
}