import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerCardComponent } from './divider-card.component';

describe('DividerCardComponent', () => {
  let component: DividerCardComponent;
  let fixture: ComponentFixture<DividerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DividerCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DividerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
