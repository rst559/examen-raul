import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaulaInferiorComponent } from './taula-inferior.component';

describe('TaulaInferiorComponent', () => {
  let component: TaulaInferiorComponent;
  let fixture: ComponentFixture<TaulaInferiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaulaInferiorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaulaInferiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
