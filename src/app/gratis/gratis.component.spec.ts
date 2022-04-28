import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GratisComponent } from './gratis.component';

describe('GratisComponent', () => {
  let component: GratisComponent;
  let fixture: ComponentFixture<GratisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GratisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GratisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
