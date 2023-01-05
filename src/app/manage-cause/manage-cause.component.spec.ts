import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCauseComponent } from './manage-cause.component';

describe('ManageCauseComponent', () => {
  let component: ManageCauseComponent;
  let fixture: ComponentFixture<ManageCauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCauseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
