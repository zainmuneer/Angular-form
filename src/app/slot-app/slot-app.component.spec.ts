import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotAppComponent } from './slot-app.component';

describe('SlotAppComponent', () => {
  let component: SlotAppComponent;
  let fixture: ComponentFixture<SlotAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlotAppComponent]
    });
    fixture = TestBed.createComponent(SlotAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
