import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatComponent } from '../../components/cat/cat.component';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-timmer',
  standalone: true,
  imports: [CommonModule, CatComponent],
  templateUrl: './timmer.component.html'
})
export class TimmerComponent implements OnInit, OnDestroy {

  counter = signal(5);

  private countdownSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.startCountDown();
  }
  ngOnDestroy(): void {
    this.stopCountdown();
  }

  private startCountDown = () => {
    const source = interval(1000);
    this.countdownSubscription = source.subscribe(() => {
      this.counter.update(c => c = c - 1);

      if (this.counter() === 0) {
        this.stopCountdown()
      }
    });
  }

  private stopCountdown() {
    if (this.countdownSubscription) {
      this.countdownSubscription.unsubscribe();
    }
  }
}
