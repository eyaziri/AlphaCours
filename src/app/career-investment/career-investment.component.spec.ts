import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerInvestmentComponent } from './career-investment.component';

describe('CareerInvestmentComponent', () => {
  let component: CareerInvestmentComponent;
  let fixture: ComponentFixture<CareerInvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerInvestmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
