import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicListPageComponent } from './comic-list-page.component';

describe('ComicListPageComponent', () => {
  let component: ComicListPageComponent;
  let fixture: ComponentFixture<ComicListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComicListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComicListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
