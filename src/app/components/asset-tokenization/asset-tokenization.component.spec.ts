import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetTokenizationComponent } from './asset-tokenization.component';

describe('AssetTokenizationComponent', () => {
  let component: AssetTokenizationComponent;
  let fixture: ComponentFixture<AssetTokenizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetTokenizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetTokenizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
