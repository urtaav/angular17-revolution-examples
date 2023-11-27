import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferredViewComponent } from './deferred-view.component';

describe('DeferredViewComponent', () => {
  let component: DeferredViewComponent;
  let fixture: ComponentFixture<DeferredViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferredViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferredViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
