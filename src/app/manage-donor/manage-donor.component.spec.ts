import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDonorComponent } from './manage-donor.component';

describe('ManageDonorComponent', () => {
  let component: ManageDonorComponent;
  let fixture: ComponentFixture<ManageDonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageDonorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
