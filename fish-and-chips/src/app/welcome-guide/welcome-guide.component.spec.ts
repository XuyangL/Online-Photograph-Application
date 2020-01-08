import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeGuideComponent } from './welcome-guide.component';

describe('WelcomeGuideComponent', () => {
  let component: WelcomeGuideComponent;
  let fixture: ComponentFixture<WelcomeGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
