import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceAccountComponent } from './advance-account.component';

describe('AdvanceAccountComponent', () => {
  let component: AdvanceAccountComponent;
  let fixture: ComponentFixture<AdvanceAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
