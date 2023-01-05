import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMovingTextComponent } from './manage-moving-text.component';

describe('ManageMovingTextComponent', () => {
  let component: ManageMovingTextComponent;
  let fixture: ComponentFixture<ManageMovingTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageMovingTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageMovingTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
