import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDespositComponent } from './todo-desposit.component';

describe('TodoDespositComponent', () => {
  let component: TodoDespositComponent;
  let fixture: ComponentFixture<TodoDespositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDespositComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDespositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
