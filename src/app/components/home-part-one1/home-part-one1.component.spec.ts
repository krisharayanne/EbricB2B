import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePartOne1Component } from './home-part-one1.component';

describe('HomePartOne1Component', () => {
  let component: HomePartOne1Component;
  let fixture: ComponentFixture<HomePartOne1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePartOne1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePartOne1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
