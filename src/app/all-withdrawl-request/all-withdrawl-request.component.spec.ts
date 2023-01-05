import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWithdrawlRequestComponent } from './all-withdrawl-request.component';

describe('AllWithdrawlRequestComponent', () => {
  let component: AllWithdrawlRequestComponent;
  let fixture: ComponentFixture<AllWithdrawlRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllWithdrawlRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllWithdrawlRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
