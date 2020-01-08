import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperateImageBoxComponent } from './operate-image-box.component';

describe('OperateImageBoxComponent', () => {
  let component: OperateImageBoxComponent;
  let fixture: ComponentFixture<OperateImageBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperateImageBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperateImageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
