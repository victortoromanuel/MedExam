import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CortoComponent } from './corto.component';

describe('CortoComponent', () => {
  let component: CortoComponent;
  let fixture: ComponentFixture<CortoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CortoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CortoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
