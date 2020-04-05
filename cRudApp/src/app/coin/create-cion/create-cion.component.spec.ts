import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCionComponent } from './create-cion.component';

describe('CreateCionComponent', () => {
  let component: CreateCionComponent;
  let fixture: ComponentFixture<CreateCionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
