import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HideCampaignComponent } from './hide-campaign.component';

describe('HideCampaignComponent', () => {
  let component: HideCampaignComponent;
  let fixture: ComponentFixture<HideCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HideCampaignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HideCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
