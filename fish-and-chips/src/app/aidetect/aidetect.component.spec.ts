import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AIDetectComponent } from './aidetect.component';

describe('AIDetectComponent', () => {
  let component: AIDetectComponent;
  let fixture: ComponentFixture<AIDetectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AIDetectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AIDetectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
