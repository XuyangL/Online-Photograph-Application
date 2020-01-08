import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideCommonComponent } from './guide-common.component';

describe('GuideCommonComponent', () => {
  let component: GuideCommonComponent;
  let fixture: ComponentFixture<GuideCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
