import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecializacionComponent } from './especializacion.component';

describe('EspecializacionComponent', () => {
  let component: EspecializacionComponent;
  let fixture: ComponentFixture<EspecializacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecializacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecializacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
