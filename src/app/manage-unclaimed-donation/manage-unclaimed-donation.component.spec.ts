import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUnclaimedDonationComponent } from './manage-unclaimed-donation.component';

describe('ManageUnclaimedDonationComponent', () => {
  let component: ManageUnclaimedDonationComponent;
  let fixture: ComponentFixture<ManageUnclaimedDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageUnclaimedDonationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageUnclaimedDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
