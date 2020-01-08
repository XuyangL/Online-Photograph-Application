import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedToolbarComponent } from './advanced-toolbar.component';

describe('AdvancedToolbarComponent', () => {
  let component: AdvancedToolbarComponent;
  let fixture: ComponentFixture<AdvancedToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
