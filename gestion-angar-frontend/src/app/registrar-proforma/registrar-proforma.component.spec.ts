import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarProformaComponent } from './registrar-proforma.component';

describe('RegistrarProformaComponent', () => {
  let component: RegistrarProformaComponent;
  let fixture: ComponentFixture<RegistrarProformaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarProformaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarProformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
