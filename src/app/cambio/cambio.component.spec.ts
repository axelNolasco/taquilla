import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioComponent } from './cambio.component';

describe('ReimpresionComponent', () => {
  let component: CambioComponent;
  let fixture: ComponentFixture<CambioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
