import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DespedidaPage } from './despedida.page';

describe('DespedidaPage', () => {
  let component: DespedidaPage;
  let fixture: ComponentFixture<DespedidaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DespedidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
