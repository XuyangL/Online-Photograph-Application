import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeLoginBtnComponent } from './welcome-login-btn.component';

describe('WelcomeLoginBtnComponent', () => {
  let component: WelcomeLoginBtnComponent;
  let fixture: ComponentFixture<WelcomeLoginBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeLoginBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeLoginBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
