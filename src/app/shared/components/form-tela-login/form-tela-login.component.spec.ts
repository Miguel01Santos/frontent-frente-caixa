import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTelaLoginComponent } from './form-tela-login.component';

describe('FormTelaLoginComponent', () => {
  let component: FormTelaLoginComponent;
  let fixture: ComponentFixture<FormTelaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTelaLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTelaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
