import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GanarPage } from './ganar.page';

describe('GanarPage', () => {
  let component: GanarPage;
  let fixture: ComponentFixture<GanarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GanarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
