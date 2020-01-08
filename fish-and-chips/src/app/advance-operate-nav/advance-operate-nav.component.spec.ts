import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceOperateNavComponent } from './advance-operate-nav.component';

describe('AdvanceOperateNavComponent', () => {
  let component: AdvanceOperateNavComponent;
  let fixture: ComponentFixture<AdvanceOperateNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceOperateNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceOperateNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
