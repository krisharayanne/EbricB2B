import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainConsultationComponent } from './blockchain-consultation.component';

describe('BlockchainConsultationComponent', () => {
  let component: BlockchainConsultationComponent;
  let fixture: ComponentFixture<BlockchainConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockchainConsultationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockchainConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
