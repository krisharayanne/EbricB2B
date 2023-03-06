import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionPartnerComponent } from './distribution-partner.component';

describe('DistributionPartnerComponent', () => {
  let component: DistributionPartnerComponent;
  let fixture: ComponentFixture<DistributionPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributionPartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributionPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
