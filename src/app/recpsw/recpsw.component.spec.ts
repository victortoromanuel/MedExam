import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecpswComponent } from './recpsw.component';

describe('RecpswComponent', () => {
  let component: RecpswComponent;
  let fixture: ComponentFixture<RecpswComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecpswComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecpswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
