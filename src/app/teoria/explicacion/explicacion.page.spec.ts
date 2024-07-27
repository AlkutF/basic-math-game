import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExplicacionPage } from './explicacion.page';

describe('ExplicacionPage', () => {
  let component: ExplicacionPage;
  let fixture: ComponentFixture<ExplicacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplicacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
