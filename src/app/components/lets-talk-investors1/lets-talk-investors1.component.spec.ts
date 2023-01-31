import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsTalkInvestors1Component } from './lets-talk-investors1.component';

describe('LetsTalkInvestors1Component', () => {
  let component: LetsTalkInvestors1Component;
  let fixture: ComponentFixture<LetsTalkInvestors1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetsTalkInvestors1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetsTalkInvestors1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
