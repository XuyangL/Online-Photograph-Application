import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceOperateComponent } from './advance-operate.component';

describe('AdvanceOperateComponent', () => {
  let component: AdvanceOperateComponent;
  let fixture: ComponentFixture<AdvanceOperateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceOperateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceOperateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
