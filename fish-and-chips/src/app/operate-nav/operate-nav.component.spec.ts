import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperateNavComponent } from './operate-nav.component';

describe('OperateNavComponent', () => {
  let component: OperateNavComponent;
  let fixture: ComponentFixture<OperateNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperateNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperateNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
