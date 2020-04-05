import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCionComponent } from './edit-cion.component';

describe('EditCionComponent', () => {
  let component: EditCionComponent;
  let fixture: ComponentFixture<EditCionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
