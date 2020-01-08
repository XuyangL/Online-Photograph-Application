import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideAdvanceComponent } from './guide-advance.component';

describe('GuideAdvanceComponent', () => {
  let component: GuideAdvanceComponent;
  let fixture: ComponentFixture<GuideAdvanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideAdvanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
