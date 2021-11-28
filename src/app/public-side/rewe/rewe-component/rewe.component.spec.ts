import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReweComponent } from './rewe.component';

describe('ReweComponent', () => {
  let component: ReweComponent;
  let fixture: ComponentFixture<ReweComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReweComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
