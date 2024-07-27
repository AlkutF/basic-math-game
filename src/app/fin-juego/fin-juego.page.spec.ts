import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinJuegoPage } from './fin-juego.page';

describe('FinJuegoPage', () => {
  let component: FinJuegoPage;
  let fixture: ComponentFixture<FinJuegoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FinJuegoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
