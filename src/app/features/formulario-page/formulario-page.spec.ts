import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPage } from './formulario-page';

describe('FormularioPage', () => {
  let component: FormularioPage;
  let fixture: ComponentFixture<FormularioPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioPage],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
