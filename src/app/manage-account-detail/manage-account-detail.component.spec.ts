import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAccountDetailComponent } from './manage-account-detail.component';

describe('ManageAccountDetailComponent', () => {
  let component: ManageAccountDetailComponent;
  let fixture: ComponentFixture<ManageAccountDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAccountDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAccountDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
