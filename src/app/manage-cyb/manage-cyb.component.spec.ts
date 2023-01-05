import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCYBComponent } from './manage-cyb.component';

describe('ManageCYBComponent', () => {
  let component: ManageCYBComponent;
  let fixture: ComponentFixture<ManageCYBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCYBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCYBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
