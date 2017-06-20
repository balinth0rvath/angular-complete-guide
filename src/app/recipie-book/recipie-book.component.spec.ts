import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipieBookComponent } from './recipie-book.component';

describe('RecipieBookComponent', () => {
  let component: RecipieBookComponent;
  let fixture: ComponentFixture<RecipieBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipieBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipieBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
