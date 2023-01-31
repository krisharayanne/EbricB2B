import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyABricComponent } from './buy-a-bric.component';

describe('BuyABricComponent', () => {
  let component: BuyABricComponent;
  let fixture: ComponentFixture<BuyABricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyABricComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyABricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
