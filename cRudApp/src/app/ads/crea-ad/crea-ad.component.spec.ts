import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaAdComponent } from './crea-ad.component';

describe('CreaAdComponent', () => {
  let component: CreaAdComponent;
  let fixture: ComponentFixture<CreaAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
