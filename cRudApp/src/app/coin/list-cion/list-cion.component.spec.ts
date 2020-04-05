import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCionComponent } from './list-cion.component';

describe('ListCionComponent', () => {
  let component: ListCionComponent;
  let fixture: ComponentFixture<ListCionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
