import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCampaignerComponent } from './manage-campaigner.component';

describe('ManageCampaignerComponent', () => {
  let component: ManageCampaignerComponent;
  let fixture: ComponentFixture<ManageCampaignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCampaignerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCampaignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
